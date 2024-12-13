import { useState } from "react";

const MoodLogTable = () => {
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
    { date: "2023-12-05", moodScore: 8, comment: "Excited for the weekend" },
    { date: "2023-12-06", moodScore: 7, comment: "Productive work day" },
    {
      date: "2023-12-07",
      moodScore: 6,
      comment: "Feeling okay, nothing special",
    },
    { date: "2023-12-08", moodScore: 7, comment: "Went for a nice walk" },
    { date: "2023-12-09", moodScore: 8, comment: "Watched a great movie" },
    {
      date: "2023-12-10",
      moodScore: 5,
      comment: "Feeling a bit under the weather",
    },
  ];

  const handleRowSelect = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="bg-gray-800 p-4 shadow rounded-lg overflow-x-auto">
      <h2 className="text-lg font-semibold text-gray-200 mb-4">Mood Log</h2>
      <table className="table-auto w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-600 px-4 py-2 text-white">
              Date
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Mood Score
            </th>
            <th className="border border-gray-600 px-4 py-2 text-white">
              Comment
            </th>
          </tr>
        </thead>
        <tbody>
          {moodLogs.map((log, index) => (
            <tr
              key={index}
              className={`cursor-pointer ${
                selectedRow === index
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleRowSelect(index)}
            >
              <td className="border border-gray-600 px-4 py-2 text-gray-200">
                {log.date}
              </td>
              <td className="border border-gray-600 px-4 py-2 text-gray-200">
                {log.moodScore}
              </td>
              <td className="border border-gray-600 px-4 py-2 text-gray-200">
                {log.comment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRow !== null && (
        <div className="mt-4 p-4 bg-gray-700 border border-gray-600 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-100">
            Selected Mood Log:
          </h3>
          <p className="text-gray-200">Date: {moodLogs[selectedRow].date}</p>
          <p className="text-gray-200">
            Mood Score: {moodLogs[selectedRow].moodScore}
          </p>
          <p className="text-gray-200">
            Comment: {moodLogs[selectedRow].comment}
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodLogTable;
