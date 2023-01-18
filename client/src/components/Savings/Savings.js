import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography, Button, Container } from "@mui/material";
import { textAlign } from "@mui/system";
import { Container, Button, Typography, IconButton, List, ListItem, ListItemText, Grid, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBack from "@mui/icons-material/ArrowBack";

const dayjs = require("dayjs");

export default function Savings() {
  return (
    <>
      <Link to="/savings"></Link>

      <Container sx={{ bgcolor: "#546E7A", height: "100vh" }} maxWidth="sm">
        <Typography variant="h3" component="h1">
          January 18, 2023 Savings Goals
        </Typography>

        {/* dayjs().format(MM/DD/YYYY) */}

        <Box textAlign="center" sx={{ p: 2, border: "3px solid black" }}>
          <Link to="/savingsform">
            <Button type="submit">Set a New Goal</Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}
