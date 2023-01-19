import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

export default function SavingsCard({ name, amount, length, description }) {
  return (
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
        Complete within: {length} months
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
        Description: {description}
      </Typography>
      <Typography
        sx={{
          fontSize: "130%",
        }}
      >
        {amount}
      </Typography>

      <IconButton edge="end" aria-label="delete">
        <DoneIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
