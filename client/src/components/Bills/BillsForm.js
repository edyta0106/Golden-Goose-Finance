import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function BillsForm() {
  //   const [formState, setFormState] = useState({ goalname: "", email: "", password: "" });
  return (
    <>
      <Container>
        <Box component="form" onSubmit="">
          <StyledTextField name="billname" type="text" id="standard-basic" label="Bill Name" variant="standard" />
          <StyledTextField name="billamount" type="number" step="10" id="standard-basic" label="Bill Amount" variant="standard" />
          <StyledTextField name="duedate" type="text" id="standard-basic" label="Due Date" variant="standard" />
          <StyledTextField
            name="category"
            type="textarea"
            id="standard-basic"
            multiline
            rows={2}
            maxRows={4}
            label="Category Type"
            variant="standard"
          />

          <Box sx={{ textAlign: "center" }}>
            <Link to="/bills">
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
        </Box>
      </Container>
    </>
  );
}
