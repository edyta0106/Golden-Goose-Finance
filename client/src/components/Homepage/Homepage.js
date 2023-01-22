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
        <Stack
          direction="horizontal"
          justifyContent="center"
          sx={{ my: 5, p: 3 }}
        >
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
                marginLeft: "1.5rem",
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
