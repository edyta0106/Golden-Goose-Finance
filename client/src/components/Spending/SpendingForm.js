import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function SpendingForm() {
  //   const [formState, setFormState] = useState({ goalname: "", email: "", password: "" });
  return (
    <>
      <Container>
        <Box component="form" onSubmit="">
          <StyledTextField name="expenseName" type="text" id="standard-basic" label="Expense Name" variant="standard" />
          <StyledTextField name="expenseCost" type="number" step="10" id="standard-basic" label="Expense Amount" variant="standard" />
          <Link to="/spending">
            <Box sx={{ textAlign: "center" }}>
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
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
