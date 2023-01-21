import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "@mui/system";
// import getBillTotal from "../../utils/chartMath";
import { useQuery } from "@apollo/client";
import { GET_BILL, GET_EXPENSE, GET_GOAL } from "../../utils/queries";
import { imageListItemBarClasses } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

//Custom hook -
const QueryMultiple = () => {
  const res1 = useQuery(GET_BILL);
  const res2 = useQuery(GET_GOAL);
  const res3 = useQuery(GET_EXPENSE);

  return [res1, res2, res3];
};

export function PieChart() {
  const [{ data: data1 }, { data: data2 }, { data: data3 }] = QueryMultiple();

  var mappingBills = [];
  let billSum = 0;
  mappingBills = data1.map((x) => {
    return x;
  });
  console.log(mappingBills);

  const [stateData, setData] = useState({
    labels: ["Bill", "Savings", "Expenses"],
    datasets: [
      {
        label: "$$ Amount",
        //Pass in : Bills  Expenses Savings
        data: [100, 200, 100],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  return (
    <>
      <Container sx={{}}>
        <Pie data={stateData} />
      </Container>
    </>
  );
}

//resources :
//1. https://www.chartjs.org/docs/latest/configuration/elements.html#arc-configuration
