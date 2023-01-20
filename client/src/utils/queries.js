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
      expenseName
      expenseCost
    }
  }
`;
