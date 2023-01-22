import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import BillsCard from "./BillsCard";

import { useQuery } from "@apollo/client";
import { GET_BILL } from "../../utils/queries";
import { REMOVE_BILL } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Bills() {
  const { loading, error, data } = useQuery(GET_BILL);
  const billData = data?.getBill || [];

  const [removeBill, { error: errorRemove }] = useMutation(REMOVE_BILL);

  const handleDelete = async (billID) => {
    console.log("deleting");
    try {
      const { data } = await removeBill({
        variables: {
          billID,
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
        bgcolor: "#E3F2FD",
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
        {/* Total Bills Amount */}
        <Typography
          sx={{
            fontSize: "150%",
            fontWeight: "bolder",
            paddingTop: "7%",
            paddingBottom: "15%",
          }}
        >
        </Typography>
        {/* Button to Add Bill */}
        <Link to="/billsform">
          <Button
            variant="outlined"
            sx={{
              bgcolor: "rgb(54, 162, 235)",
              color: "white",
              border: "none",
            }}
          >
            Add A Bill
          </Button>
        </Link>
      </Box>
      {/* Individual Bill Container */}
      {billData.map((bills) => (
        <BillsCard
          key={bills.billID}
          dueDate={bills.billDueDate}
          name={bills.billName}
          amount={bills.billAmount}
          billID={bills.billID}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
}
