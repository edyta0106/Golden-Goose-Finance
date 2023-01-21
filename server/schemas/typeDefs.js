const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    bills: [TotalBills]
    savings: [TotalSavings]
    spending: [TotalSpending]
    income: Int
  }

  type TotalBills {
    _id: ID
    billName: String
    billAmount: Int
    dueDate: String
  }

  type TotalSavings {
    savingsID: ID
    goalAmount: Int
    goalName: String
    goalLength: String
    goalDescription: String
  }

  type TotalSpending {
    spendingID: ID
    expenseName: String
    expenseCost: Int
  }

  type Logout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User!
    getGoal: [TotalSavings]

    getIncome: [User]

    getExpense: [TotalSpending]
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    updateUser(firstName: String, lastName: String, username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addIncome(income: Int): User
    addBill(billName: String!, billAmount: Int!, dueDate: String!): TotalBills
    addGoal(goalAmount: Int, goalName: String, goalLength: String, goalDescription: String): TotalSavings
    removeGoal(goal: String): TotalSavings
    addExpense(expenseName: String, expenseCost: Int): TotalSpending
    removeExpense(spendingID: String): [TotalSpending]
  }
`;

module.exports = typeDefs;
