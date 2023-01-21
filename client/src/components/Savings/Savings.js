import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import SavingsCard from "./SavingsCard";
// import dummy from "./DummyData";
import { useQuery } from "@apollo/client";
import { GET_GOAL, GET_ME } from "../../utils/queries";
import { REMOVE_GOAL } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

// const dayjs = require("dayjs");

export default function Savings() {
  const { loading, error, data } = useQuery(GET_GOAL);
  const savingsData = data?.getGoal || [];
  console.log(savingsData);
  console.log(error);

  const [removeGoal, { error: errorRemove }] = useMutation(REMOVE_GOAL);

  const handleDelete = async (savingsID) => {
    console.log("deleting");
    try {
      const { data } = await removeGoal({
        variables: {
          savingsID,
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
        bgcolor: "#FFF8E1",
        marginTop: "5%",
        marginBottom: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
          {/* dayjs().format(MM/DD/YYYY) */}
          Savings Goals
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "7%",
          paddingTop: "7%",
        }}
      >
        <Link to="/savingsform">
          <Button
            variant="outlined"
            sx={{
              bgcolor: "rgb(255, 205, 86)",
              color: "white",
              border: "none",
            }}
          >
            Create A Goal
          </Button>
        </Link>
      </Box>
      {savingsData.map((goals) => (
        <SavingsCard
          key={goals.savingsID}
          name={goals.goalName}
          amount={goals.goalAmount}
          length={goals.goalLength}
          description={goals.goalDescription}
          savingsID={goals.savingsID}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
}
