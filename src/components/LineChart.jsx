import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ includeBMI = false }) => {
  const data = {
    labels: ["", "Breakfast", "Snack", "Lunch", "Snack", "Dinner"],
    datasets: [
      {
        label: "Protein Intake (g)",
        data: [0, 15, 50, 20, 0, 5],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
      {
        label: "Carbs Intake (g)",
        data: [0, 30, 60, 65, 0, 30],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        tension: 0.4,
      },
      {
        label: "Fats Intake (g)",
        data: [0, 10, 20, 40, 0, 20],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dietary Progression Throughout the Day",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
