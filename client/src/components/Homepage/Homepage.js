import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import CarouselSlider from "./CarouselSlider";

export default function Homepage() {
  return (
    <>
      <CarouselSlider />
      {/* <Link to="/"></Link> */}
      <Container sx={{ minHeight: "15vh" }}>
        <Box
          sx={{
            width: "100%",
            // maxHeight: { xs: 300, md: 167 },
            // maxWidth: { xs: 320, md: 250 },
          }}
        />
        <Typography align="center" component="p" sx={{ my: 5 }}>
          Saving up for that dream vacation? Paying down some debt? Setting up a budget just got easier. The Golden Goose Finance app allows you to
          track all your expenses on the go with just a few clicks.
        </Typography>
        <Stack direction="horizontal" justifyContent="center" sx={{ my: 5, p: 3 }}>
          <Link to="/signup">
            <Button
              variant=""
              sx={{
                color: "#FFD740",
                backgroundColor: "rgba(0, 0, 0, 0.87)",
                border: "none",
                "&:hover": {
                  transform: "scale(110%)",
                  transition: "ease-in-out",
                  backgroundColor: "rgba(45, 45, 45, 0.87)",
                },
              }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant=""
              sx={{
                color: "#FFD740",
                backgroundColor: "rgba(0, 0, 0, 0.87)",
                marginLeft: "1.5rem",
                border: "none",
                "&:hover": {
                  transform: "scale(110%)",
                  transition: "ease-in-out",
                  backgroundColor: "rgba(45, 45, 45, 0.87)",
                },
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
