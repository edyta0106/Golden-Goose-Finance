const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    userFinances: Int
  }
  type FinancialData {
    _id: ID
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
  }
  type TotalSavings {
    _id: ID
    totalSavings: Int
    goals: Int
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
    user: User
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, password: String!, email: String!): Auth
    updateUser(firstName: String, lastName: String, username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
