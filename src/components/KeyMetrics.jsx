import React from "react";

const KeyMetrics = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">Calories Burned</h2>
        <p className="text-2xl font-bold text-blue-600">3500</p>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">Mood Score</h2>
        <p className="text-2xl font-bold text-green-600">8/10</p>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">Protein Intake</h2>
        <p className="text-2xl font-bold text-purple-600">120g</p>
      </div>
    </section>
  );
};

export default KeyMetrics;
