import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
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
  let history = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          ...formState,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token, history);
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
      <Container sx={{ minHeight: "90vh" }}>
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
            <Button
              onClick={handleFormSubmit}
              variant=""
              sx={{
                mt: 5,
                color: "#FFD740",
                backgroundColor: "rgba(0, 0, 0, 0.87)",
                border: "none",
                "&:hover": {
                  transform: "scale(110%)",
                  transition: "ease-in-out",
                  backgroundColor: "rgba(45, 45, 45, 0.87)",
                },
              }}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
//
