import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function SavingsForm() {
  //   const [formState, setFormState] = useState({ goalName: "", goalAmount: "", goalLength: "", goalDescription: "" });
  return (
    <>
      <Container>
        <Box component="form" onSubmit="">
          <StyledTextField name="goalName" type="text" id="standard-basic" label="Goal Name" variant="standard" />
          <StyledTextField name="goalAmount" type="number" step="10" id="standard-basic" label="Goal Amount" variant="standard" />
          <StyledTextField name="goalLength" type="text" id="standard-basic" label="Goal Length" variant="standard" />
          <StyledTextField
            name="goalDescription"
            type="textarea"
            id="standard-basic"
            multiline
            rows={2}
            maxRows={4}
            label="Goal Description"
            variant="standard"
          />
          <Link to="/savings">
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
