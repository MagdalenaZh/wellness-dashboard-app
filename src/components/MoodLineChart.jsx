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

const MoodLineChart = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Mood Score",
        data: [7, 6.5, 8, 7.5], // Example data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.3)", // Subtle fill under the line
        tension: 0.5, // Smooth curve
        pointRadius: 5, // Larger points
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Red points
        pointBorderColor: "rgba(255, 99, 132, 1)",
        pointHoverRadius: 7, // Enlarged on hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", // Legend text color
        },
      },
      title: {
        display: true,
        text: "Mood Trends Over Time",
        color: "white", // Chart title color
        font: {
          size: 18,
          family: "'Poppins', sans-serif",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Mood Score: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // X-axis labels color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // X-axis gridline color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "white", // Y-axis labels color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Y-axis gridline color
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default MoodLineChart;
