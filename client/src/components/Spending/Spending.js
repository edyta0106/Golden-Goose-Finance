import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
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
        <Button
          variant="outlined"
          sx={{
            width: "150%",
          }}
        >
          Add Expense
        </Button>
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
      </Box>
    </Container>
  );
}

// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
// import "../Spending/Spending.css";
// import { Typography, Container, Button } from "@mui/material";
// // import DeleteIcon from "@mui/icons-material/Delete";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <>
//       <Container sx={{ textAlign: "center" }}>
//         <Link to="/spending"></Link>
//         <h2 className="myH2">Total Spending</h2>

//         <Typography variant="h4" component="p">
//           $194.50
//         </Typography>

//         <Button sx={{ my: 5, color: "black", bgcolor: "lightgray", border: "none" }} variant="outlined">
//           Add Expense
//         </Button>
//         <div style={{ height: 400, width: "100%" }}>
//           {/* <Typography sx={{ mt: 4, mb: 4 }} variant="h5" component="div">
//             Expenses
//           </Typography> */}
//           <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
//         </div>
//       </Container>
//     </>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import "../Spending/Spending.css";
// import { Typography, Container, Button, IconButton, List, ListItem, ListItemText, Grid } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function Spending() {
//   // const [dense, setDense] = React.useState(false);
//   // const [secondary, setSecondary] = React.useState(false);
//   return (
//     <Container sx={{ textAlign: "center" }}>
//       <Link to="/spending"></Link>
//       <h2 className="myH2">Total Spending</h2>
//       <Typography variant="h4" component="p">
//         $194.50
//       </Typography>
//       <Button sx={{ my: 5, color: "black", bgcolor: "lightgray", border: "none" }} variant="outlined">
//         Add Expense
//       </Button>
//       <Grid
//         container
//         direction="column"
//         justifyContent="start"
//         alignContent="center"
//         item
//         xs={12}
//         sx={{ fontFamily: "sans-serif", my: 5, bgcolor: "#A5D6A7" }}
//       >
//         <Typography sx={{ mt: 4, mb: 2, textDecoration: "underline" }} variant="h5" component="div">
//           Expenses
//         </Typography>
//         <List>
//           <ListItem
//             secondaryAction={
//               <IconButton edge="end" aria-label="delete">
//                 <DeleteIcon />
//               </IconButton>
//             }
//           >
//             <ListItemText primary="Lunch at Los Dos" />
//             <ListItemText primary="$25" />
//           </ListItem>
//           <ListItem
//             secondaryAction={
//               <IconButton edge="end" aria-label="delete">
//                 <DeleteIcon />
//               </IconButton>
//             }
//           >
//             <ListItemText primary="King Soopers" />
//             <ListItemText primary="$300" />
//           </ListItem>
//           <ListItem
//             secondaryAction={
//               <IconButton edge="end" aria-label="delete">
//                 <DeleteIcon />
//               </IconButton>
//             }
//           >
//             <ListItemText primary="Car Wash" />
//             <ListItemText primary="$20" />
//           </ListItem>
//           <ListItem
//             secondaryAction={
//               <IconButton edge="end" aria-label="delete">
//                 <DeleteIcon />
//               </IconButton>
//             }
//           >
//             <ListItemText primary="BestBuy" />
//             <ListItemText primary="$2000" />
//           </ListItem>
//           <ListItem
//             secondaryAction={
//               <IconButton edge="end" aria-label="delete">
//                 <DeleteIcon />
//               </IconButton>
//             }
//           >
//             <ListItemText primary="OfficeDepot" />
//             <ListItemText primary="$125" />
//           </ListItem>
//         </List>
//       </Grid>
//     </Container>
//   );
// }
