import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MoodLineChart from "../components/MoodLineChart";
import Sparklines from "../components/Sparklines";
import MoodPieChart from "../components/MoodPieChart";
import SleepAreaChart from "../components/SleepAreaChart";
import MoodLogTable from "../components/MoodLogTable";

const MoodTrends = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const moodLogs = [
    {
      date: "2023-12-01",
      moodScore: 8,
      comment: "Feeling great after workout",
    },
    { date: "2023-12-02", moodScore: 6, comment: "A bit stressed due to work" },
    { date: "2023-12-03", moodScore: 7, comment: "Relaxed, did some yoga" },
    { date: "2023-12-04", moodScore: 5, comment: "Tired, lack of sleep" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900 text-white">
      <Header />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-200">Mood Trends</h1>

          {/* Key Metrics Section */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">
                Average Mood Score
              </h2>
              <p className="text-2xl font-bold text-blue-400">7.2</p>
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">
                Best Mood Day
              </h2>
              <p className="text-2xl font-bold text-green-400">12/01/2023</p>
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">
                Worst Mood Day
              </h2>
              <p className="text-2xl font-bold text-red-400">12/04/2023</p>
            </div>
          </div>

          {/* Area Chart and Sparklines */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg">
              <SleepAreaChart />
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg">
              <Sparklines />
            </div>
          </div>

          {/* Pie Chart and Mood Log */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg">
              <MoodPieChart />
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg">
              <MoodLogTable />
            </div>
          </div>

          {/* Mood Trends Over Time */}
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-[800px] bg-gray-800 p-4 shadow rounded-lg">
              <MoodLineChart />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MoodTrends;
