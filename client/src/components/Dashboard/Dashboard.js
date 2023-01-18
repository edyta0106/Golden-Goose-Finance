// rfc command for react function

import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Container, Button, Typography } from "@mui/material";
import { MdOutlineSavings } from "react-icons/md";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FAF9F6",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledBox = styled(Paper)({
  backgroundColor: "#FAF9F6",
  minHeight: "160px",
  borderRadius: ".6rem",
  // add paper proper here
});

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: ".8rem",
    padding: ".5rem",
  },
}));

export default function Dashboard() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container sx={{ mt: 5, p: 2, bgcolor: "lightpink" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Item sx={{ height: " 200px" }} elevation={12}>
                Graph
              </Item>
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
              <Item elevation={12}>
                <StyledButton>
                  {/* <MdOutlineSavings /> */}
                  Savings
                </StyledButton>
              </Item>
              <Item elevation={12}>
                <StyledButton>Bills</StyledButton>
              </Item>
              <Item elevation={12}>
                <StyledButton>Spent</StyledButton>
              </Item>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <Item elevation={16}>
                <Button>Pie</Button>
              </Item>
              <Item elevation={16}>
                <Button>Bar</Button>
              </Item>
              <Item elevation={16}>
                <Button>Line</Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ mt: 3, p: 3, bgcolor: "lightblue" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={6}>
              <StyledBox elevation={4}>
                <Typography>Test</Typography>
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4}>Box 1</StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4}>Box 1</StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4}>Box 1</StyledBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
