import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        username
        password
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_INCOME = gql`
  mutation AddIncome($income: Int) {
    addIncome(income: $income) {
      income
    }
  }
`;

export const ADD_BILL = gql`
  mutation AddBill($billName: String!, $billAmount: Int!, $dueDate: String!) {
    addBill(billName: $billName, billAmount: $billAmount, dueDate: $dueDate) {
      _id
      billAmount
      billName
      dueDate
    }
  }
`;

export const ADD_GOAL = gql`
  mutation addGoal($goalAmount: Int, $goalName: String, $goalLength: String, $goalDescription: String) {
    addGoal(goalAmount: $goalAmount, goalName: $goalName, goalLength: $goalLength, goalDescription: $goalDescription) {
      goalAmount
      goalName
      goalLength
      goalDescription
    }
  }
`;
