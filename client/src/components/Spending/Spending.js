import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SpendingCard from "./SpendingCard";
// import dummy from "./DummySpending";

import { useQuery } from "@apollo/client";
import { GET_EXPENSE, GET_ME } from "../../utils/queries";
import { REMOVE_EXPENSE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Spending() {
  const { loading, error, data } = useQuery(GET_EXPENSE);
  const spendingData = data?.getExpense || [];
  console.log(data);

  const [removeExpense, { error: errorRemove }] = useMutation(REMOVE_EXPENSE);

  const handleDelete = async (spendingID) => {
    console.log("deleting");
    try {
      const { data } = await removeExpense({
        variables: {
          spendingID,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container
      sx={{
        borderRadius: "10px",
        boxShadow: "0px 0px 17px 1px black",
        width: "90%",
        height: "100vh",
        bgcolor: "#FFEBEE",
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
        <Link to="/dashboard">
          <Button>
            <ArrowBack
              sx={{
                fontSize: 40,
                color: "black",
              }}
            />
          </Button>
        </Link>
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
        {/* Total Expenses Amount */}
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
        {/* Button to Add Expense */}
        <Link to="/spendingform">
          <Button
            variant="outlined"
            sx={{
              bgcolor: "rgb(255, 99, 132)",
              color: "white",
              border: "none",
            }}
          >
            Add Expense
          </Button>
        </Link>
      </Box>
      {spendingData.map((expenses) => (
        <SpendingCard
          key={expenses.spendingID}
          name={expenses.expenseName}
          cost={expenses.expenseCost}
          spendingID={expenses.spendingID}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
}
