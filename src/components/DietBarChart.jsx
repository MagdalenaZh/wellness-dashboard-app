import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Fr", "Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"],
    datasets: [
      {
        label: "Calories Intake (kcal)",
        data: [2000, 890, 1232, 1489, 2300, 1700, 1000, 1200], // Calorie values
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)", // Orange
          "rgba(75, 192, 192, 0.8)", // Gray
          "rgba(75, 192, 192, 0.8)", // Gray
          "rgba(255, 205, 86, 0.8)", // Green
          "rgba(255, 99, 132, 0.8)", // Green
          "rgba(255, 99, 132, 0.8)", // Green
          "rgba(75, 192, 192, 0.8)", // Blue
          "rgba(75, 192, 192, 0.8)", // Gray
        ],
        borderColor: [
          " rgba(255, 99, 132, 0.8)", // Orange
          "rgba(75, 192, 192, 0.8)", // Gray
          "rgba(75, 192, 192, 0.8)", // Gray
          "rgba(255, 205, 86, 0.8)", // Green
          "rgba(255, 99, 132, 0.8)", // Green
          "rgba(255, 99, 132, 0.8)", // Green
          "rgba(75, 192, 192, 0.8)", // Blue
          "rgba(75, 192, 192, 0.8)", // Gray
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides legend for simplicity
      },
      tooltip: {
        enabled: true, // Enables tooltips for interaction
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Calories (kcal)",
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF", // White text for better visibility
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Subtle gridlines
        },
      },
      x: {
        ticks: {
          color: "#FFFFFF", // White text for days
        },
        grid: {
          display: false, // Hides gridlines on the x-axis
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">
        Weekly Calorie Intake
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
