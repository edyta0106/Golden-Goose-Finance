const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID

    username: String
    password: String
    email: String
    finances: [FinancialData]!
  }

  type FinancialData {
    _id: ID
    bills: [TotalBills]
    savings: [TotalSavings]
    spending: [TotalSpending]
    income: [TotalIncome]
  }

  type TotalBills {
    _id: ID
    billName: String
    billAmount: Int
    billDueDate: Int
    billCadence: String
    billCategory: String
  }

  type TotalIncome {
    _id: ID
    salary: Int
    bills: [TotalBills]
    savings: [TotalSavings]
    spending: [TotalSpending]
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
  }
`;

module.exports = typeDefs;
