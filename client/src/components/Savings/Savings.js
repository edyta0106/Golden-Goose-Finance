import React from "react";
import { Link } from "react-router-dom";
// import { textAlign } from "@mui/system";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FontAwesomeIcon from "@mui/icons-material/Delete";
import ArrowBack from "@mui/icons-material/ArrowBack";

// const dayjs = require("dayjs");

export default function Savings() {
  return (
    <Container
      sx={{
        borderRadius: "10px",
        boxShadow: "0px 0px 17px 1px black",
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
      <Box
        sx={{
          width: "105%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Link to="/dashboard">
          <Button>
            <ArrowBack
              sx={{
                fontSize: 40,
                color: "black",
              }}
            />
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          height: "10%",
        }}
      >
        <Typography
          sx={{
            fontSize: "300%",
            fontWeight: "bolder",
          }}
        >
          {/* dayjs().format(MM/DD/YYYY) */}
          Savings Goals
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "7%",
          paddingTop: "7%",
        }}
      >
        <Link to="/savingsform">
          <Button
            variant="outlined"
            sx={{
              bgcolor: "gray",
              color: "white",
              border: "none",
            }}
          >
            Create A Goal
          </Button>
        </Link>
      </Box>

      <Box
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
        sx={{
          borderRadius: "10px",
          boxShadow: "2px 2px 10px black",
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
            fontSize: "150%",
            fontWeight: "bold",
          }}
        >
          Complete within: 6 months
        </Typography>
        <Typography
          sx={{
            fontSize: "130%",
          }}
        >
          Family Vacation to Fiji
        </Typography>
        <Typography
          sx={{
            fontSize: "130%",
          }}
        >
          Description - will go below
        </Typography>
        <Typography
          sx={{
            fontSize: "130%",
          }}
        >
          $9,000
        </Typography>

        <IconButton edge="end" aria-label="delete">
          {/* <DeleteIcon sx={{ color: "white" }} /> */}
          <FontAwesomeIcon icon="fa-regular fa-square-check" />
        </IconButton>
      </Box>
    </Container>
  );
}
