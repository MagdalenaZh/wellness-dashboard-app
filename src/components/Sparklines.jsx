import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const Sparklines = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Generate 30 days
    datasets: [
      {
        label: "Mood Score",
        data: Array.from({ length: 30 }, () =>
          (Math.random() * 5 + 5).toFixed(2)
        ), // Generate random data between 5 and 10
        borderColor: "rgba(54, 162, 235, 1)", // Blue line
        backgroundColor: "rgba(54, 162, 235, 0.1)", // Subtle blue background
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Energy Levels",
        data: Array.from({ length: 30 }, () =>
          (Math.random() * 5 + 3).toFixed(2)
        ), // Random data between 3 and 8
        borderColor: "rgba(255, 159, 64, 1)", // Orange line
        backgroundColor: "rgba(255, 159, 64, 0.1)", // Subtle orange background
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white", // White text for legend in dark mode
        },
      },
      tooltip: {
        backgroundColor: "#1F2937", // Dark tooltip background
        titleColor: "white",
        bodyColor: "white",
        cornerRadius: 6,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">
        Mood and Energy Trends
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Sparklines;
