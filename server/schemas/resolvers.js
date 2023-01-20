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
          .populate("income")
          .populate("savings")
          .populate("spending");
        return user;
      }
      throw new AuthenticationError("No one logged in!");
    },
    getGoal: async (parent, args, context) => {
      console.log("in this file");
      const goals = await TotalSavings.find({});
      console.log(goals);
      return goals;
    },
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
      return await User.findByIdAndUpdate(context.user._id, {
        $set: { income: income },
      });
    },
    addBill: async (parent, { billName, billAmount, dueDate }, context) => {
      console.log(context.user);

      const bill = await TotalBills.create({ billName, billAmount, dueDate });
      console.log(bill);
      return await User.findByIdAndUpdate(
        context.user._id,
        {
          $addToSet: { bills: bill },
        },
        {
          new: true,
        }
      );
    },
    addGoal: async (parent, args) => {
      const totalSavings = await TotalSavings.create(args);

      return totalSavings;
    },
    addExpense: async (parent, args) => {
      const totalSpending = await TotalSpending.create(args);
      return totalSpending;
    },
  },
};

module.exports = resolvers;
