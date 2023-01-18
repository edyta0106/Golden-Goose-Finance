import React from "react";
import { Link } from "react-router-dom";
import "../Bills/Bills.css";
import {
  Container,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Bills() {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Link to="/bills"></Link>
      <h2 className="bH2">Monthly Bills</h2>
      <Typography variant="h4" component="p">
        $500
      </Typography>
      <Button
        sx={{ my: 5, color: "black", bgcolor: "lightgray", border: "none" }}
        variant="outlined"
      >
        Add Bill
      </Button>
      <Grid item xs={12} md={6} sx={{ border: "black solid" }}>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary="Rent" />
            <ListItemText primary="$950" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary="Netflix" />
            <ListItemText primary="$15" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary="Verizon" />
            <ListItemText primary="$75" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary="Loan" />
            <ListItemText primary="$250" />
          </ListItem>
        </List>
      </Grid>
    </Container>
  );
}
