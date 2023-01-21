import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container } from "@mui/system";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Bills",
      data: [250, 150, 500, 300, 200, 400, 300],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Savings",
      data: [50, 120, 100, 125, 220, 320, 375],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Expenses",
      data: [123, 144, 220, 65, 300, 350, 235],

      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function BarGraph() {
  return (
    <>
      <Container sx={{ maxWidth: 1000, minHeight: 400 }}>
        <Bar options={{ maintainAspectRatio: false }} data={data} />
      </Container>
    </>
  );
}
