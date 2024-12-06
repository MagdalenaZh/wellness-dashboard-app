import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GymProgress from "./pages/GymProgress";
import DietInsights from "./pages/DietInsights";
import MoodTrends from "./pages/MoodTrends";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gym-progress" element={<GymProgress />} />
          <Route path="/diet-insights" element={<DietInsights />} />
          <Route path="/mood-trends" element={<MoodTrends />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
