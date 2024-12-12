import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MoodPieChart = () => {
  const data = {
    labels: ["Happy", "Calm", "Productive", "Stressed"],
    datasets: [
      {
        label: "Mood Breakdown",
        data: [10, 5, 8, 3],
        backgroundColor: ["#4BC0C0", "#36A2EB", "#FFCE56", "#FF6384"],
        hoverOffset: 4,
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
        text: "Mood Breakdown by Category",
      },
    },
  };

  return (
    <div
      className="bg-gray-800 p-4 shadow rounded-lg"
      style={{ maxWidth: "500px", margin: "0 auto" }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default MoodPieChart;
