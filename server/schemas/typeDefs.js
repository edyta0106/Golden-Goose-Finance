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
    billDueDate: Int
    billCadence: String
    billCategory: String
  }

  type TotalSavings {
    _id: ID
    totalSavings: Int
  }

  type TotalSpending {
    _id: ID
    expenseName: String
    expenseCost: Int
    expenseCategory: String
  }

  type Logout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]!
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    updateUser(firstName: String, lastName: String, username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addIncome(income: Int): User
    addBill(billName: String!, billAmount Int!, dueDate: String!): TotalBills
  }
`;

module.exports = typeDefs;
