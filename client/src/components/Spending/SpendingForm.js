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
      {/* <Link to="/spendingform"></Link> */}
      <Container>
        <Box component="form" onSubmit="">
          <StyledTextField name="goalname" type="text" id="standard-basic" label="Goal Name" variant="standard" />
          <StyledTextField name="goalamount" type="number" step="10" id="standard-basic" label="Goal Amount" variant="standard" />
          <StyledTextField name="goallength" type="text" id="standard-basic" label="Goal Length" variant="standard" />
          <StyledTextField
            name="goaldescription"
            type="textarea"
            id="standard-basic"
            multiline
            rows={2}
            maxRows={4}
            label="Goal Description"
            variant="standard"
          />
          <Link to="/spending">
            <Box sx={{ textAlign: "center" }}>
              <Button>Submit</Button>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
