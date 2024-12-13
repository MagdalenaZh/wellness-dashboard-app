import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line react/prop-types
const GymDrilldownChart = ({ timeFrame }) => {
  const data = {
    labels: ["Cardio", "Strength", "Yoga", "HIIT"],
    datasets: [
      {
        label: "Calories Burned",
        data:
          timeFrame === "week" ? [800, 1000, 500, 1200] : [100, 200, 50, 150],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
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
        text: `Calories Burned by Activity (${
          timeFrame === "week" ? "Weekly" : "Daily"
        })`,
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg">
      <Pie data={data} options={options} className="max-h-[500px]" />
    </div>
  );
};

export default GymDrilldownChart;
