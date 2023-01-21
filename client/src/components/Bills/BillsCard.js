import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BillsCard({
  billID,
  name,
  amount,
  dueDate,
  handleDelete,
}) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        boxShadow: "2px 2px 10px black",
        width: "100%",
        height: "15vh",
        bgcolor: "rgb(54, 162, 235)",
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
        {dueDate}
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

      <IconButton
        onClick={() => handleDelete(billID)}
        edge="end"
        aria-label="delete"
      >
        <DeleteIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
