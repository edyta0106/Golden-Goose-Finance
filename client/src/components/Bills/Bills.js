import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { fontSize, fontWeight } from "@mui/system";

export default function Bills() {
  return (
    <>
      <Link to="/bills"></Link>
      {/* Form Container */}
      <Container
        sx={{
          width: "90%",
          height: "100vh",
          bgcolor: "#C5C6C7",
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        {/* Form Header Text Container */}
        <Box
          sx={{
            height: "10%",
          }}
        >
          <Typography
            sx={{
              fontSize: "200%",
              fontWeight: "bolder",
              paddingTop: "20%",
            }}
          >
            Bills
          </Typography>
        </Box>
        {/* Form Header Total Amount Container */}
        <Box>
          <Typography
            sx={{
              fontSize: "150%",
              fontWeight: "bolder",
              paddingTop: "25%",
            }}
          >
            $321.45
          </Typography>
        </Box>
        {/* Individual Bill Container */}
        <Box
          sx={{
            width: "100%",
            height: "15vh",
            bgcolor: "#546E7A",
            color: "white",
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            alignContent: "center"
          }}
        >
          <Typography
            sx={{
              fontSize: "130%",
              fontWeight: "bold",
            }}
          >
            Jun. 16th
          </Typography>
          <Typography
            sx={{
              fontSize: "150%",
            }}
          >
            Netflix
          </Typography>
          <Typography
            sx={{
              fontSize: "150%",
            }}
          >
            $15.99
          </Typography>
        </Box>
      </Container>
    </>
  );
}
