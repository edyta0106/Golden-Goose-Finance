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

    getIncome: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.find({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("No one logged in!");
    },
    getExpense: async (parent, args, context) => {
      console.log("in this file");
      const expenses = await TotalSpending.find({});
      console.log(expenses);
      return expenses;

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
    addBill: async (parent, { billName, billAmount, dueDate }, context) => {
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
  },
};

module.exports = resolvers;
