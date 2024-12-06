import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BulletGraph from "../components/BulletGraph";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import Table from "../components/Table";

const DietInsights = () => {
  //manage the selected row from the table
  const [selectedRow, setSelectedRow] = useState(null);

  //data for the table
  const mealData = [
    {
      date: "2023-12-01",
      meal: "Breakfast",
      calories: 350,
      protein: 20,
      carbs: 45,
      fats: 10,
    },
    {
      date: "2023-12-02",
      meal: "Lunch",
      calories: 600,
      protein: 35,
      carbs: 60,
      fats: 20,
    },
    {
      date: "2023-12-03",
      meal: "Dinner",
      calories: 500,
      protein: 25,
      carbs: 50,
      fats: 15,
    },
    {
      date: "2023-12-04",
      meal: "Snack",
      calories: 200,
      protein: 10,
      carbs: 30,
      fats: 5,
    },
  ];

  const handleRowSelect = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold mb-6">Diet Insights</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">
                Calories Consumed
              </h2>
              <p className="text-2xl font-bold text-blue-600">1650 kcal</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">
                Protein Intake
              </h2>
              <p className="text-2xl font-bold text-green-600">80g</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">
                Carbs Intake
              </h2>
              <p className="text-2xl font-bold text-purple-600">120g</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BulletGraph />

            <BarChart />
          </div>

          <div className="mt-6">
            <LineChart />
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Meal Log</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Meal</th>
                  <th className="border border-gray-300 px-4 py-2">Calories</th>
                  <th className="border border-gray-300 px-4 py-2">Protein</th>
                  <th className="border border-gray-300 px-4 py-2">Carbs</th>
                  <th className="border border-gray-300 px-4 py-2">Fats</th>
                </tr>
              </thead>
              <tbody>
                {mealData.map((row, index) => (
                  <tr
                    key={index}
                    className={`cursor-pointer ${
                      selectedRow === index
                        ? "bg-blue-100"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleRowSelect(index)}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {row.date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.meal}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.calories}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.protein}g
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.carbs}g
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.fats}g
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DietInsights;
