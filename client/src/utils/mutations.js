import { gql } from "@apollo/client";

// export const ADD_USER = gql`
//   mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
//     addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;

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
