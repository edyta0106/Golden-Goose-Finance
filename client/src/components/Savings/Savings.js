import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Typography, Box } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SavingsCard from "./SavingsCard";
import dummy from "./DummyData";

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
      <Link to="/savings"></Link>
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
              width: "150%",
            }}
          >
            Create A Goal
          </Button>
        </Link>
      </Box>
      {dummy.map((goals) => (
        <SavingsCard key={goals._id} name={goals.name} amount={goals.amount} length={goals.length} description={goals.description} />
      ))}
    </Container>
  );
}
