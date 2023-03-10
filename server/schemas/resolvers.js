const { AuthenticationError } = require("apollo-server-express");
const { User, TotalBills, TotalSavings } = require("../models");
const TotalSpending = require("../models/TotalSpending");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("bills")
          .populate("spending")
          .populate("savings");
        return user;
      }
      throw new AuthenticationError("No one logged in!");
    },
    getGoal: async (parent, args, context) => {
      console.log("in this file");
      const goals = await TotalSavings.find();
      return goals;
    },

    getIncome: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.find({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("No one logged in!");
    },
    getExpense: async (parent, args, context) => {
      console.log("in this file");
      const expenses = await TotalSpending.find();
      console.log(expenses);
      return expenses;
    },
    getBill: async (parent, args, context) => {
      console.log("in this file");
      const bills = await TotalBills.find();
      console.log(bills);
      return bills;
    },
    // getTotalBills: async (parent, args, context) => {
    //      const user = await User.findOne({ _id: context.user._id })
    //       const total = user.totalBills
    //       console.log(total);
    //    return total
    // },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      console.log(password);
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    addIncome: async (parent, { income }, context) => {
      console.log(context.user);
      console.log(income);
      return await User.findByIdAndUpdate(
        context.user._id,
        {
          $set: { income: income },
        },
        {
          new: true,
        }
      );
    },
    addBill: async (parent, args, context) => {
      const newBill = await TotalBills.create(args);
      return await User.findByIdAndUpdate(
        context.user._id,
        {
          $addToSet: { bills: newBill },
        },
        {
          new: true,
        }
      );
    },
    // addTotalBills: async (parent, args, context) => {
    //   console.log("in this file");
    //   let totalSum;
    //   const bills = await TotalBills.find({});
    //   const billAmount = bills.map((bill) => (totalSum = 0), bill.billAmount);
    //   return await User.findByIdAndUpdate(
    //     context.user._id,
    //     {
    //       $set: { totalBills: billAmount},
    //     },
    //     {
    //       new: true,
    //     }
    //   );
    // },
    addGoal: async (parent, args, context) => {
      const newGoal = await TotalSavings.create(args);

      return await User.findByIdAndUpdate(
        context.user._id,
        {
          $addToSet: { savings: newGoal },
        },
        {
          new: true,
        }
      );
    },
    removeGoal: async (parent, { savingsID }, context) => {
      if (context.user) {
        const deletedGoal = await TotalSavings.findOneAndDelete({ savingsID });

        await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { savings: deletedGoal._id } }, { new: true });

        const savings = await TotalSavings.find({});
        return savings;
      }
    },
    addExpense: async (parent, args, context) => {
      const newExpense = await TotalSpending.create(args);
      return await User.findByIdAndUpdate(
        context.user._id,
        {
          $addToSet: { spending: newExpense },
        },
        {
          new: true,
        }
      );
    },
    removeExpense: async (parent, { spendingID }, context) => {
      if (context.user) {
        const deletedExpense = await TotalSpending.findOneAndDelete({
          spendingID,
        });

        await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { spending: deletedExpense._id } }, { new: true });

        const expenses = await TotalSpending.find({});
        return expenses;
      }
    },
    removeBill: async (parent, { billID }, context) => {
      if (context.user) {
        const deletedBill = await TotalBills.findOneAndDelete({
          billID,
        });

        await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { bills: deletedBill._id } }, { new: true });

        const bills = await TotalBills.find({});
        return bills;
      }
    },
  },
};

module.exports = resolvers;
