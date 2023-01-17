import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, TextField, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function SignUp(props) {
  const [formState, setFormState] = useState({ username: "", email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  //try {
  //   const { data } = await addProfile({
  //     variables: { ...formState },
  //   });

  //   Auth.login(data.addProfile.token);
  // } catch (e) {
  //   console.error(e);
  // }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          ...formState,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Link to="/signup"></Link>
      <Container>
        <Box component="form" onSubmit={handleFormSubmit}>
          <StyledTextField
            onChange={handleChange}
            value={formState.username}
            name="username"
            type="text"
            id="standard-basic"
            label="User Name"
            variant="standard"
          />
          <StyledTextField
            onChange={handleChange}
            value={formState.email}
            name="email"
            type="email"
            id="standard-basic"
            label="Email"
            variant="standard"
          />

          <StyledTextField
            onChange={handleChange}
            value={formState.password}
            name="password"
            type="password"
            id="standard-basic"
            label="Password"
            variant="standard"
          />
          <Box textAlign="center">
            <Button type="submit" sx={{ mt: 5, backgroundColor: "#666" }}>
              Create Account
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

// export default function SignUp() {
//   const [formState, setFormState] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });

//   // const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
// const handleFormSubmit = async (event) => {
//   console.log(formState);
//   event.preventDefault();

//
//   setFormState({
//     userName: "",
//     email: "",
//     password: "",
//   });
// };
