import { useState, useEffect } from "react";

const LiveExerciseData = () => {
  const [data, setData] = useState({
    steps: 1000, // Start at 1000 steps
    bpm: 75, // Initial BPM
    distance: (1000 / 1500).toFixed(2), // Initial distance in kilometers
    calories: 25, // Starting calories burned (1000 steps = 25 calories)
  });

  useEffect(() => {
    // Steps update every 15 seconds
    const stepsInterval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        steps: prevData.steps + Math.floor(Math.random() * (23 - 15 + 1) + 15), // Increment steps by 15–23
      }));
    }, 15000);

    // BPM update every 5 seconds
    const bpmInterval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        bpm: Math.floor(Math.random() * (120 - 80 + 1) + 80), // Random BPM between 80–120
      }));
    }, 5000);

    // Distance update every 10 seconds
    const distanceInterval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        distance: (
          parseFloat(prevData.distance) +
          (Math.random() * (0.014 - 0.01) + 0.01)
        ).toFixed(2), // Increment distance (10-14 meters per second in km)
      }));
    }, 10000);

    // Calories burned updates every 40 steps
    const caloriesInterval = setInterval(() => {
      setData((prevData) => ({
        ...prevData,
        calories: prevData.calories + 1, // 1 calorie per 40 steps
      }));
    }, 15000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(stepsInterval);
      clearInterval(bpmInterval);
      clearInterval(distanceInterval);
      clearInterval(caloriesInterval);
    };
  }, []);

  return (
    <div className="flex justify-between gap-4 w-full flex-wrap">
      {/* Steps Taken */}
      <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
        <h2 className="text-md font-semibold text-white">Steps Taken</h2>
        <p className="text-lg font-bold text-blue-400 mt-2">{data.steps}</p>
      </div>

      {/* BPM */}
      <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
        <h2 className="text-md font-semibold text-white">Heart Rate (BPM)</h2>
        <p className="text-lg font-bold text-red-400 mt-2">{data.bpm} BPM</p>
      </div>

      {/* Distance Covered */}
      <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
        <h2 className="text-md font-semibold text-white">Distance Covered</h2>
        <p className="text-lg font-bold text-green-400 mt-2">
          {data.distance} km
        </p>
      </div>

      {/* Calories Burned */}
      <div className="flex-1 bg-gray-800 p-4 shadow rounded-lg text-center">
        <h2 className="text-md font-semibold text-white">Calories Burned</h2>
        <p className="text-lg font-bold text-yellow-400 mt-2">
          {data.calories} kcal
        </p>
      </div>
    </div>
  );
};

export default LiveExerciseData;
