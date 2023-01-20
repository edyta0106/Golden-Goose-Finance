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
