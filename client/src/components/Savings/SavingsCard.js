import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
// import { REMOVE_GOAL } from "../../utils/mutations";
// import { useMutation } from "@apollo/client";

export default function SavingsCard({ savingsID, name, amount, length, description, handleDelete }) {
  // const [removeGoal, { error }] = useMutation(REMOVE_GOAL, {
  //   update(cache, { data: { removeGoal } }) {
  //     // try {
  //     //   cache.writeQuery({
  //     //     query: QUERY_ME,
  //     //     data: { me: removeSkill },
  //     //   });
  //     // } catch (e) {
  //     //   console.error(e);
  //     // }
  //   },
  // });

  // const handleRemoveGoal = async (goal) => {
  //   try {
  //     const { data } = await removeGoal({
  //       variables: { goal },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
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
          fontSize: "150%",
          fontWeight: "bold",
        }}
      >
        Complete within: {length}
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

      <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(savingsID)}>
        <DoneIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
