import React, { useState } from "react";
import { BarGraph } from "./BarGraph";
import { LineGraph } from "./LineGraph";
import { PieChart } from "./PieChart";
import { Box, styled, Button, Grid, Paper } from "@mui/material";

const StyledBox = styled(Box)({});
const StyledButton = styled(Button)({
  padding: "1rem 1.8rem",
  backgroundColor: "#9db7e9",
  color: "#fff",
  marginTop: "5rem",
  marginLeft: "1rem",
  "&:hover": {
    backgroundColor: "#5b88dc",
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FAF9F6",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export function TheGraphComponent({ chart }) {
  //1. Call use state - chart, setChart
  //2. build function that checks the values passed from button click
  //  a. call state method to update state, and rerender
  //3. return if.. else if... else value : pie , line , bar

  return (
    <>
      {chart === "pie" ? (
        <>
          <StyledBox className="pieChartBox">
            <PieChart key="pieChart" />
          </StyledBox>
        </>
      ) : chart === "bar" ? (
        <>
          <StyledBox className="barGraphBox">
            <BarGraph key="barGraph" />
          </StyledBox>
        </>
      ) : chart === "line" ? (
        <>
          <StyledBox className="lineGraphBox">
            <LineGraph key="lineGraph" />
          </StyledBox>
        </>
      ) : (
        <>
          <LineGraph />
        </>
      )}
    </>
  );
}
