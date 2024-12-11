import React, { useState, useEffect } from "react";

const LiveExerciseData = () => {
  const [data, setData] = useState({
    bpm: 80, // Initial BPM
    speed: 6.0, // Initial speed in km/h
    calories: 0, // Initial calories burned
    distance: 0, // Initial distance in km
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => ({
        bpm: Math.floor(Math.random() * 40) + 80, // Random BPM: 80-120
        speed: (Math.random() * 6 + 4).toFixed(1), // Random Speed: 4-10 km/h
        calories: prevData.calories + Math.random() * 0.5, // Increment Calories
        distance: prevData.distance + Math.random() * 0.05, // Increment Distance
      }));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">BPM</h2>
        <p className="text-2xl font-bold text-red-500">{data.bpm}</p>
      </div>

      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">Running Speed</h2>
        <p className="text-2xl font-bold text-blue-500">{data.speed} km/h</p>
      </div>

      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">Calories Burned</h2>
        <p className="text-2xl font-bold text-green-500">
          {data.calories.toFixed(2)} kcal
        </p>
      </div>

      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">Distance</h2>
        <p className="text-2xl font-bold text-purple-500">
          {data.distance.toFixed(2)} km
        </p>
      </div>
    </section>
  );
};

export default LiveExerciseData;
