import React from "react";
import moneyImage from "../images/hero-img-1.jpg";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Homepage() {
  return (
    <>
      <Link to="/"></Link>
      <Container sx={{ minHeight: "85vh" }}>
        <Box
          component="img"
          sx={{
            width: "100%",
            // maxHeight: { xs: 300, md: 167 },
            // maxWidth: { xs: 320, md: 250 },
          }}
          alt="Money"
          src={moneyImage}
        />
        <Typography align="center" variant="h5" component="h1" sx={{ mt: 5, mb: 2 }}>
          Dashboard
        </Typography>
        <Typography align="center" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ex nesciunt, mollitia blanditiis cupiditate, itaque eaque ipsum unde ullam
          dolorum alias expedita perferendis, quia assumenda.
        </Typography>
        <Stack direction="horizontal" mt="">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </Stack>
        <Box />
      </Container>
    </>
  );
}
