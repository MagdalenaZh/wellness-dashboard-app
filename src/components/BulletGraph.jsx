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
        data: [1800], // Example data
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Goal",
        data: [2000], // Example goal
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    indexAxis: "y", // This makes the bar chart horizontal
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: "Calories Consumed vs. Goal" },
    },
    scales: {
      x: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BulletGraph;
