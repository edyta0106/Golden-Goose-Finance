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
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBack from "@mui/icons-material/ArrowBack";

export default function Bills() {
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
      <Link to="/bills"></Link>
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
          Rent
        </Typography>
        <Typography
          sx={{
            fontSize: "150%",
          }}
        >
          $950
        </Typography>

        <IconButton edge="end" aria-label="delete">
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Container>
    // <Container sx={{ textAlign: "center" }}>
    //   <Link to="/bills"></Link>
    //   <h2 className="bH2">Monthly Bills</h2>
    //   <Typography variant="h4" component="p">
    //     $500
    //   </Typography>
    //   <Button
    //     sx={{ my: 5, color: "black", bgcolor: "lightgray", border: "none" }}
    //     variant="outlined"
    //   >
    //     Add Bill
    //   </Button>
    //   <Grid item xs={12} md={6} sx={{ border: "black solid" }}>
    //     <List>
    //       <ListItem
    //         secondaryAction={
    //           <IconButton edge="end" aria-label="delete">
    //             <DeleteIcon />
    //           </IconButton>
    //         }
    //       >
    //         <ListItemText primary="Rent" />
    //         <ListItemText primary="$950" />
    //       </ListItem>
    //       <ListItem
    //         secondaryAction={
    //           <IconButton edge="end" aria-label="delete">
    //             <DeleteIcon />
    //           </IconButton>
    //         }
    //       >
    //         <ListItemText primary="Netflix" />
    //         <ListItemText primary="$15" />
    //       </ListItem>
    //       <ListItem
    //         secondaryAction={
    //           <IconButton edge="end" aria-label="delete">
    //             <DeleteIcon />
    //           </IconButton>
    //         }
    //       >
    //         <ListItemText primary="Verizon" />
    //         <ListItemText primary="$75" />
    //       </ListItem>
    //       <ListItem
    //         secondaryAction={
    //           <IconButton edge="end" aria-label="delete">
    //             <DeleteIcon />
    //           </IconButton>
    //         }
    //       >
    //         <ListItemText primary="Loan" />
    //         <ListItemText primary="$250" />
    //       </ListItem>
    //     </List>
    //   </Grid>
    // </Container>
  );
}