const { AuthenticationError } = require("apollo-server-express");
const { FinancialData, User } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: "savings.total",
                    populate: ""
                })
            }
            return User.find();
        },

    }
}