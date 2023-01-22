import React from "react";
import { BarGraph } from "./BarGraph";
import { LineGraph } from "./LineGraph";
import { PieChart } from "./PieChart";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)({
  position: "relative",
});
export function TheGraphComponent({ chart }) {
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

// Important note : Responsive - https://www.chartjs.org/docs/latest/configuration/responsive.html#important-note
