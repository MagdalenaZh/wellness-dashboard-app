import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import DietBulletGraph from "../components/DietBulletGraph";
import DietBarChart from "../components/DietBarChart";
import DietLineChart from "../components/DietLineChart";
import DietTable from "../components/DietTable";

const DietInsights = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-gray-200">
            Diet Insights
          </h1>

          {/* Key Metrics Section */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">
                Calories Consumed
              </h2>
              <p className="text-2xl font-bold text-blue-400">980 kcal</p>
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">
                Protein Intake
              </h2>
              <p className="text-2xl font-bold text-green-400">80g</p>
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">Carbs Intake</h2>
              <p className="text-2xl font-bold text-purple-400">120g</p>
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">Fats Intake</h2>
              <p className="text-2xl font-bold text-yellow-400">120g</p>
            </div>
            <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
              <h2 className="text-lg font-semibold text-white">
                Calories Burned
              </h2>
              <p className="text-2xl font-bold text-red-400">250 kcal</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="flex flex-wrap justify-between mb-6">
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[49.2%]">
              <DietBulletGraph />
            </div>
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[49.2%]">
              <DietBarChart />
            </div>
          </div>

          {/* Line Chart Section */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-800 my-2 shadow rounded-lg w-full lg:w-[80%]">
              <DietLineChart />
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-gray-800 my-2 shadow rounded-lg w-full max-w-[1200px] mx-auto overflow-x-auto">
            <DietTable />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DietInsights;
