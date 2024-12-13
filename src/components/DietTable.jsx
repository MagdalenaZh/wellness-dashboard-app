import { useState } from "react";

const DietTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const data = [
    {
      date: "2023-12-01",
      time: "08:00 AM",
      meal: "Breakfast",
      calories: 250,
      protein: 15,
      carbs: 30,
      fats: 10,
    },
    {
      date: "2023-12-01",
      time: "10:30 AM",
      meal: "Snack",
      calories: 260,
      protein: 50,
      carbs: 20,
      fats: 5,
    },
    {
      date: "2023-12-01",
      time: "01:00 PM",
      meal: "Lunch",
      calories: 200,
      protein: 20,
      carbs: 45,
      fats: 25,
    },
    {
      date: "2023-12-01",
      time: "04:00 PM",
      meal: "Snack",
      calories: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
    },
    {
      date: "2023-12-01",
      time: "07:30 PM",
      meal: "Dinner",
      calories: 270,
      protein: 5,
      carbs: 60,
      fats: 20,
    },
  ];

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg overflow-x-auto">
      <h2 className="text-lg font-semibold text-white mb-4">Meal Log</h2>
      <table className="table-auto w-full border-collapse border border-gray-700 overflow-x-auto">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-600 px-4 py-2 text-white">
              Date
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Time
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Meal
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Calories
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Protein
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Carbs
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Fats
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`cursor-pointer ${
                selectedRow === index
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 text-gray-200"
              }`}
              onClick={() => handleRowClick(index)}
            >
              <td className="border border-gray-600 px-4 py-2">{row.date}</td>
              <td className="border border-gray-600 px-4 py-2">{row.time}</td>
              <td className="border border-gray-600 px-4 py-2">{row.meal}</td>
              <td className="border border-gray-600 px-4 py-2">
                {row.calories}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                {row.protein}g
              </td>
              <td className="border border-gray-600 px-4 py-2">{row.carbs}g</td>
              <td className="border border-gray-600 px-4 py-2">{row.fats}g</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRow !== null && (
        <div className="mt-4 p-4 bg-gray-700 border border-gray-600 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">
            Selected Meal Details:
          </h3>
          <p className="text-gray-300">Date: {data[selectedRow].date}</p>
          <p className="text-gray-300">Time: {data[selectedRow].time}</p>
          <p className="text-gray-300">Meal: {data[selectedRow].meal}</p>
          <p className="text-gray-300">
            Calories: {data[selectedRow].calories}
          </p>
          <p className="text-gray-300">Protein: {data[selectedRow].protein}g</p>
          <p className="text-gray-300">Carbs: {data[selectedRow].carbs}g</p>
          <p className="text-gray-300">Fats: {data[selectedRow].fats}g</p>
        </div>
      )}
    </div>
  );
};

export default DietTable;
