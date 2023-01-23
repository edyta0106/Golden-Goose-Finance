import { Container, TextField, Button, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { ADD_EXPENSE } from "../../utils/mutations";
import Auth from "../../utils/auth";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function SpendingForm() {
  let redirect = useNavigate()
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
        variables: { ...formState, expenseCost: parseInt(formState.expenseCost), user: Auth.getProfile().data.username },
      });
      console.log(data);
      setFormState();
      redirect("/spending");
      window.location.reload();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <>
      <Container
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 0px 17px 1px black",
          width: "90%",
          height: "75vh",
          bgcolor: "#FFEBEE",
          marginTop: "5%",
          marginBottom: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "105%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Link to="/spending">
            <Button>
              <ArrowBack
                sx={{
                  fontSize: 40,
                  color: "black",
                }}
              />
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            height: "20%",
          }}
        >
          <Typography
            sx={{
              fontSize: "300%",
              fontWeight: "bolder",
            }}
          >
            Add Expense
          </Typography>
        </Box>
        <form component="form">
          <StyledTextField
            name="expenseName"
            value={formState?.expenseName || ""}
            onChange={handleChange}
            type="text"
            id="standard-basic"
            label="Expense Name"
            variant="standard"
          />
          <StyledTextField
            name="expenseCost"
            value={formState?.expenseCost || ""}
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
                onClick={handleFormSubmit}
                type="submit"
                variant="outlined"
                sx={{
                  my: 5,
                  bgcolor: "rgb(255, 99, 132)",
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
