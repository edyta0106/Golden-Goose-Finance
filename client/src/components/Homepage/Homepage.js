import React from "react";
// import moneyImage from "../images/hero-img-1.jpg";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Homepage() {
  return (
    <>
      {/* <Link to="/"></Link> */}
      <Container sx={{ minHeight: "85vh" }}>
        <Box
          component="img"
          sx={{
            width: "100%",
            // maxHeight: { xs: 300, md: 167 },
            // maxWidth: { xs: 320, md: 250 },
          }}
          alt="Money"
          // src={moneyImage}
        />
        {/* <Typography align="center" variant="h5" component="h1" sx={{ mt: 5, mb: 2 }}>
          Dashboard
        </Typography> */}
        <Typography align="center" component="p" sx={{ my: 5 }}>
          Saving up for that dream vacation? Paying down some debt? Setting up a budget just got easier. The Golden Goose Finance app allows you to
          track all your expenses on the go with just a few clicks.
        </Typography>
        <Stack direction="horizontal" sx={{ my: 5 }}>
          <Link to="/signup">
            <Button
              variant="outlined"
              sx={{
                bgcolor: "gray",
                color: "white",
                border: "none",
              }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="outlined"
              sx={{
                bgcolor: "gray",
                color: "white",
                border: "none",
              }}
            >
              Login
            </Button>
          </Link>
        </Stack>
        <Box />
      </Container>
    </>
  );
}
