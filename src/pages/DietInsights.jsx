import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BulletGraph from "../components/BulletGraph";
import DietBarChart from "../components/DietBarChart";
import LineChart from "../components/LineChart";
import Table from "../components/Table";

const DietInsights = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900 text-white">
      <Header />

      <div className="flex flex-1 w-full">
        <Sidebar />

        <main className="flex-1 p-6">
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
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[300px] bg-gray-800 p-4 shadow rounded-lg">
              <BulletGraph />
            </div>
            <div className="flex-1 min-w-[300px] bg-gray-800 p-4 shadow rounded-lg">
              <DietBarChart />
            </div>
          </div>

          {/* Centered Line Chart Section */}
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-[800px] bg-gray-800 p-4 shadow rounded-lg">
              <LineChart />
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-6">
            <Table />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DietInsights;
