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
    totalBills: Int
  }

  type TotalBills {
    billID: ID
    billName: String
    billAmount: Int
    billDueDate: String
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

    getBill: [TotalBills]
  }
  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    updateUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addIncome(income: Int): User
    addBill(billName: String, billAmount: Int, billDueDate: String): TotalBills
    addTotalBills(totalBills: Int): User
    addGoal(
      goalAmount: Int
      goalName: String
      goalLength: String
      goalDescription: String
    ): TotalSavings
    removeGoal(savingsID: String): [TotalSavings]
    addExpense(expenseName: String, expenseCost: Int): TotalSpending
    removeExpense(spendingID: String): [TotalSpending]
    removeBill(billID: String): [TotalBills]
  }
`;

module.exports = typeDefs;
