import { gql } from "@apollo/client";
export const GET_ME = gql`
  {
    user {
      username
      email
      password
    }
  }
`;

export const GET_GOAL = gql`
  {
    getGoal {
      savingsID
      goalName
      goalAmount
      goalLength
      goalDescription
    }
  }
`;

export const GET_EXPENSE = gql`
  {
    getExpense {
      spendingID
      expenseName
      expenseCost
    }
  }
`;

export const GET_BILL = gql`
  query GetBill {
    getBill {
      billID
      billAmount
      billDueDate
      billName
    }
  }
`;

// export const GET_TOTAL_BILLS = gql`
//   query User {
//     user {
//       totalBills
//     }
//   }
// `;