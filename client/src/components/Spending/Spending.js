import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography, IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

export default function reusableForm() {
  return (
    // Reusable form container
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
            fontSize: "300%",
            fontWeight: "bolder",
          }}
        >
          Expenses
        </Typography>
      </Box>
      {/* Form Header Total Amount Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "7%",
          paddingTop: "7%",
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
        <Link to="/spendingform">
          <Button
            variant="outlined"
            sx={{
              width: "150%",
            }}
          >
            Add Expense
          </Button>
        </Link>
      </Box>
      {/* Individual Bill Container */}
      <Box
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
            fontSize: "130%",
            fontWeight: "bold",
          }}
        >
          Jun. 15th
        </Typography>
        <Typography
          sx={{
            fontSize: "150%",
          }}
        >
          King Soopers
        </Typography>
        <Typography
          sx={{
            fontSize: "150%",
          }}
        >
          $204.59
        </Typography>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Container>
  );
}
