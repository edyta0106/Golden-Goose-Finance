import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { ADD_GOAL } from "../../utils/mutations";
import Auth from "../../utils/auth";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function SavingsForm() {
  const [formState, setFormState] = useState({
    goalName: "",
    goalAmount: 0,
    goalLength: "",
    goalDescription: "",
  });

  const [addGoal] = useMutation(ADD_GOAL);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addGoal({
        variables: {
          ...formState,
          goalAmount: parseInt(formState.goalAmount),
          user: Auth.getProfile().data.username,
        },
      });
      console.log(data);
      setFormState();
      window.location.assign("/savings");
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <>
      <Container sx={{ minHeight: " 90vh" }}>
        <form component="form">
          <StyledTextField
            name="goalName"
            value={formState?.goalName || ""}
            onChange={handleChange}
            type="text"
            id="standard-basic"
            label="Goal Name"
            variant="standard"
          />
          <StyledTextField
            name="goalAmount"
            value={formState?.goalAmount || ""}
            onChange={handleChange}
            type="number"
            step="10"
            id="standard-basic"
            label="Goal Amount"
            variant="standard"
          />
          <StyledTextField
            name="goalLength"
            type="text"
            value={formState?.goalLength || ""}
            onChange={handleChange}
            id="standard-basic"
            label="Goal Length"
            variant="standard"
          />

          <Box sx={{ textAlign: "center" }}>
            <Link to="/savings">
              <Button
                onClick={handleFormSubmit}
                type="submit"
                variant="outlined"
                sx={{
                  my: 5,
                  bgcolor: "rgb(255, 205, 86)",
                  color: "white",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Link>
          </Box>
        </form>
      </Container>
    </>
  );
}
