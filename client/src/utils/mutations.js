import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
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
  mutation addBill($billName: String!, $billAmount: Int!, $billDueDate: String!) {
    addBill(billName: $billName, billAmount: $billAmount, billDueDate: $billDueDate) {
      billAmount
      billName
      billDueDate
    }
  }
`;

// export const ADD_TOTAL_BILLS = gql`
//   mutation AddTotalBills($totalBills: Int) {
//     addTotalBills(totalBills: $totalBills) {
//       totalBills
//     }
//   }
// `;

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
export const REMOVE_GOAL = gql`
  mutation removeGoal($savingsID: String) {
    removeGoal(savingsID: $savingsID) {
      savingsID
      goalAmount
      goalName
      goalLength
      goalDescription
    }
  }
`;
export const ADD_EXPENSE = gql`
  mutation addExpense($expenseName: String, $expenseCost: Int) {
    addExpense(expenseName: $expenseName, expenseCost: $expenseCost) {
      expenseName
      expenseCost
    }
  }
`;

export const REMOVE_EXPENSE = gql`
  mutation removeExpense($spendingID: String) {
    removeExpense(spendingID: $spendingID) {
      spendingID
      expenseName
      expenseCost
    }
  }
`;

export const REMOVE_BILL = gql`
  mutation removeBill($billID: String) {
    removeBill(billID: $billID) {
      billID
      billName
      billAmount
      billDueDate
    }
  }
`;
