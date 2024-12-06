import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MoodLineChart from "../components/MoodLineChart";
import Sparklines from "../components/Sparklines";
import MoodPieChart from "../components/MoodPieChart";

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

  const handleRowSelect = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold mb-6">Mood Trends</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">
                Average Mood Score
              </h2>
              <p className="text-2xl font-bold text-blue-600">7.2</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">
                Best Mood Day
              </h2>
              <p className="text-2xl font-bold text-green-600">12/01/2023</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">
                Worst Mood Day
              </h2>
              <p className="text-2xl font-bold text-red-600">12/04/2023</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MoodLineChart />

            <MoodPieChart />
          </div>

          <div className="mt-6">
            <Sparklines />
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Mood Log</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Mood Score
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Comment</th>
                </tr>
              </thead>
              <tbody>
                {moodLogs.map((log, index) => (
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
                      {log.date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {log.moodScore}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {log.comment}
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

export default MoodTrends;
