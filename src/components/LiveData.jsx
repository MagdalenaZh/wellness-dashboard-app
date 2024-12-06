import React, { useState, useEffect } from "react";

const LiveData = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prev) => prev + Math.floor(Math.random() * 100)); // Random increment
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded-lg text-center">
      <h2 className="text-lg font-semibold">Live Steps</h2>
      <p className="text-2xl font-bold">{steps}</p>
    </div>
  );
};

export default LiveData;
