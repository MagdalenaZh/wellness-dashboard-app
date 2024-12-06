import React, { useState } from "react";

const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const data = [
    { date: "2023-12-01", workout: "Cardio", calories: 350, mood: 8 },
    { date: "2023-12-02", workout: "Strength", calories: 400, mood: 9 },
    { date: "2023-12-03", workout: "Yoga", calories: 200, mood: 7 },
    { date: "2023-12-04", workout: "HIIT", calories: 450, mood: 6 },
    { date: "2023-12-05", workout: "Rest Day", calories: 0, mood: 10 },
  ];

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Workout</th>
            <th className="border border-gray-300 px-4 py-2">
              Calories Burned
            </th>
            <th className="border border-gray-300 px-4 py-2">Mood Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`cursor-pointer ${
                selectedRow === index ? "bg-blue-100" : "hover:bg-gray-200"
              }`}
              onClick={() => handleRowClick(index)}
            >
              <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.workout}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.calories}
              </td>
              <td className="border border-gray-300 px-4 py-2">{row.mood}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRow !== null && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold">Selected Activity:</h3>
          <p>Date: {data[selectedRow].date}</p>
          <p>Workout: {data[selectedRow].workout}</p>
          <p>Calories Burned: {data[selectedRow].calories}</p>
          <p>Mood Rating: {data[selectedRow].mood}</p>
        </div>
      )}
    </div>
  );
};

export default Table;
