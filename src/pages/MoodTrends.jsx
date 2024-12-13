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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900 text-white">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 w-full">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6 overflow-x-auto">
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
          <div className="flex flex-wrap justify-between mb-6">
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[49.2%]">
              <SleepAreaChart />
            </div>
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[49.2%]">
              <Sparklines />
            </div>
          </div>

          {/* Pie Chart and Mood Log */}
          <div className="flex flex-wrap justify-between mb-6">
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[49.2%]">
              <MoodPieChart />
            </div>
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[49.2%]">
              <MoodLogTable />
            </div>
          </div>

          {/* Mood Trends Over Time */}
          <div className="flex justify-center">
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[80%]">
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
