import React, { useState } from "react";
import { Container } from "@mui/system";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);

export const LineGraph = () => {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Yearly Fiances ",
        axis: "y",
        data: [2000, 2200, 2500, 2600, 2600, 2000, 2200, 2300, 2700, 2800, 3000, 5000],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <Container sx={{ maxWidth: 1000, minHeight: 400 }}>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </Container>
  );
};
