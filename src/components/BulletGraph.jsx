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

const BulletGraph = () => {
  const data = {
    labels: ["Calories"],
    datasets: [
      {
        label: "Consumed",
        data: [980], // example data
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue for consumed
      },
      {
        label: "Goal",
        data: [1500], // example goal
        backgroundColor: "rgba(75, 192, 192, 0.5)", // Green for goal
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bar chart
    plugins: {
      legend: {
        position: "top", // Place legend at the top
        labels: {
          color: "rgba(255, 255, 255, 0.9)", // White text for the legend
        },
      },
      title: {
        display: true,
        text: "Calories Consumed vs. Goal",
        color: "rgba(255, 255, 255, 0.9)", // White title text
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Subtle grid lines
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.9)", // White ticks
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255, 0.9)", // White y-axis labels
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BulletGraph;
