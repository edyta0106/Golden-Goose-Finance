import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";

export default function Bills() {
  return (
    <>
      <Link to="/bills"></Link>
      {/* Form Container */}
      <Container
        sx={{
          boxShadow: "0px 0px 20px 2px black",
          width: "90%",
          height: "100vh",
          bgcolor: "#C5C6C7",
          marginTop: "5%",
          marginBottom: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Back Arrow */}
        <Box
          sx={{
            width: "105%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button>
            <ArrowBack
              sx={{
                fontSize: 40,
                color: "black",
              }}
            />
          </Button>
        </Box>
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
            }}
          >
            Bills
          </Typography>
        </Box>
        {/* Form Header Total Amount Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "7%",
          }}
        >
          <Typography
            sx={{
              fontSize: "150%",
              fontWeight: "bolder",
              paddingTop: "7%",
              paddingBottom: "15%",
            }}
          >
            $321.45
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: "150%",
            }}
          >
            Add A Bill
          </Button>
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
            alignContent: "center",
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
