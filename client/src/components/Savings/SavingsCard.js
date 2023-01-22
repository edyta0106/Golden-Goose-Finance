import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export default function SavingsCard({ savingsID, name, amount, length, description, handleDelete }) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        boxShadow: "2px 2px 10px black",
        width: "100%",
        height: "15vh",
        bgcolor: "rgb(255, 205, 86)",
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
        Complete by: {length}
      </Typography>
      <Typography
        sx={{
          fontSize: "130%",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "130%",
        }}
      >
        {amount}
      </Typography>

      <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(savingsID)}>
        <DoneIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
