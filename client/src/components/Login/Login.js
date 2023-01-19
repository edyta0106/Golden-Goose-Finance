import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { Container, TextField, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Auth from "../../utils/auth";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.5rem",
});

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <Link to="/login"></Link>
      <Container>
        <Box component="form" onSubmit={handleFormSubmit}>
          <StyledTextField
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            id="standard-basic"
            label="email"
            variant="standard"
          />
          <StyledTextField
            placeholder="password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            id="standard-basic"
            label="password"
            variant="standard"
          />
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <Box textAlign="center">
            <Button type="submit" sx={{ mt: 5, border: 1 }}>
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
