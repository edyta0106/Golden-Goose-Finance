import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { ADD_EXPENSE } from "../../utils/mutations";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function SpendingForm() {
  const [formState, setFormState] = useState({ expenseName: "", expenseCost: 0 });

  const [addExpense] = useMutation(ADD_EXPENSE);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: { ...formState, expenseCost: parseInt(formState.expenseCost) },
      });
      console.log(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <>
      <Container>
        <form component="form" onSubmit={handleFormSubmit}>
          <StyledTextField
            name="expenseName"
            value={formState.expenseName}
            onChange={handleChange}
            type="text"
            id="standard-basic"
            label="Expense Name"
            variant="standard"
          />
          <StyledTextField
            name="expenseCost"
            value={formState.expenseCost}
            onChange={handleChange}
            type="number"
            step="10"
            id="standard-basic"
            label="Expense Amount"
            variant="standard"
          />

          <Box sx={{ textAlign: "center" }}>
            <Link to="/spending">
              <Button
                variant="outlined"
                sx={{
                  my: 5,
                  bgcolor: "gray",
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
