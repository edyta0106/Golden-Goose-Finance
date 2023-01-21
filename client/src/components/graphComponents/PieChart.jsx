import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "@mui/system";
import { useQuery } from "@apollo/client";
import { GET_BILL, GET_EXPENSE, GET_GOAL } from "../../utils/queries";
ChartJS.register(ArcElement, Tooltip, Legend);

//Custom hook - to query multiple useQuery
const QueryMultiple = () => {
  const res1 = useQuery(GET_BILL);
  // const map1 = res1.map((x) => x);
  const res2 = useQuery(GET_GOAL);
  const res3 = useQuery(GET_EXPENSE);

  return [res1, res2, res3];
};

//Success :
//1. I can query multiple useQuery with custom hook
//2. I can see data object from returning (data1,data2,data3)

//Problems :
//1. I'm unable to map data within PieChart component - wont let me map within a pie chart component...

//Solution :  (**These query can also be used for spending, savings, and bills pages to display total at the top)
//1. Create totalBillAmount, totalExpenseAmount, totalSavingsAmount query to map over bills, expense, and savings to return sum of the total for each collection.

export function PieChart() {
  const [{ data: data1 }, { data: data2 }, { data: data3 }] = QueryMultiple();
  console.log(data1);

  // const map1 = data1.map((x) => x);
  // console.log(map1);

  const [stateData, setData] = useState({
    labels: ["Bill", "Savings", "Expenses"],
    datasets: [
      {
        label: "$$ Amount",
        //Pass in data : totalBillAmount, totalExpenseAmount, totalSavingsAmount
        //If passing in through data array doesn't work, try pushing to data array
        data: [40, 50, 100],
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
      <Container sx={{ width: 400, height: 400 }}>
        <Pie data={stateData} options={{ maintainAspectRatio: false }} />
      </Container>
    </>
  );
}

//resources :
//1. https://www.chartjs.org/docs/latest/configuration/elements.html#arc-configuration
//2. https://stackoverflow.com/questions/59325426/how-to-resize-chart-js-element-in-react-js
