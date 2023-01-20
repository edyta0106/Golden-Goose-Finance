import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "@mui/system";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Bill", "Savings", "Expenses"],
  datasets: [
    {
      label: "$$ Amount",
      //     Bills  Expenses Savings
      data: [150, 100, 500],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <>
      <Container sx={{}}>
        <Pie data={data} />
      </Container>
    </>
  );
}

//resources :
//1. https://www.chartjs.org/docs/latest/configuration/elements.html#arc-configuration
