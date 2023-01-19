import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BillsCard({ name, amount, duedate }) {
  return (
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
        {duedate}
      </Typography>
      <Typography
        sx={{
          fontSize: "150%",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "150%",
        }}
      >
        ${amount}
      </Typography>

      <IconButton edge="end" aria-label="delete">
        <DeleteIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
