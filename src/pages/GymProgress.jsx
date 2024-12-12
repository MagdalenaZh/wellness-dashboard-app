import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BarChart from "../components/BarChart";
import DrilldownChart from "../components/DrilldownChart";
import LineChart from "../components/LineChart";
import LiveExerciseData from "../components/LiveExerciseData";

const GymProgress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [timeFrame, setTimeFrame] = useState("week");
  const [steps, setSteps] = useState(10000);
  const distance = (steps / 1500).toFixed(2);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900 text-white">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 w-full">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-4 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-200">
            Gym Progress
          </h1>

          {/* Live Data Component */}
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <LiveExerciseData />
          </div>

          {/* KPIs Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-3 shadow rounded-lg">
              <h2 className="text-md font-semibold">Total Workout Time</h2>
              <select
                className="bg-gray-700 text-white mt-1 p-1 rounded w-full"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="day">Today</option>
              </select>
              <p className="text-lg font-bold text-blue-400 mt-2">
                {timeFrame === "week" ? "12 hrs" : "1.5 hrs"}
              </p>
            </div>

            <div className="bg-gray-800 p-3 shadow rounded-lg">
              <h2 className="text-md font-semibold">Calories Burned</h2>
              <select
                className="bg-gray-700 text-white mt-1 p-1 rounded w-full"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="day">Today</option>
              </select>
              <p className="text-lg font-bold text-red-400 mt-2">
                {timeFrame === "week" ? "3500 kcal" : "500 kcal"}
              </p>
            </div>

            <div className="bg-gray-800 p-3 shadow rounded-lg">
              <h2 className="text-md font-semibold">Steps Taken</h2>
              <input
                type="number"
                className="bg-gray-700 text-white mt-1 p-1 rounded w-full"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
              />
              <p className="text-sm text-gray-400">1 km = 1500 steps</p>
            </div>

            <div className="bg-gray-800 p-3 shadow rounded-lg">
              <h2 className="text-md font-semibold">Distance Covered</h2>
              <p className="text-lg font-bold text-green-400 mt-2">
                {distance} km
              </p>
              <p className="text-sm text-gray-400">Automatically Calculated</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="flex flex-wrap gap-4">
            {/* Top Row: Bar Chart and Line Chart */}
            <div className="flex-1 basis-[45%] max-w-full bg-gray-800 p-4 shadow rounded-lg">
              <BarChart />
            </div>
            <div className="flex-1 basis-[45%] max-w-full bg-gray-800 p-4 shadow rounded-lg">
              <LineChart includeBMI={true} />
            </div>
          </div>

          {/* Bottom Row: Centered Drilldown Chart */}
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-[600px] bg-gray-800 p-4 shadow rounded-lg">
              <DrilldownChart timeFrame={timeFrame} />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default GymProgress;
