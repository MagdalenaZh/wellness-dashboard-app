import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import DrilldownChart from "../components/DrilldownChart";

const Dashboard = () => {
  //toggle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //track which charts are displayed
  const [selectedCharts, setSelectedCharts] = useState({
    barChart: true,
    lineChart: true,
    drilldownChart: true,
  });

  //toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //toggle chart visibility
  const handleChartToggle = (chart) => {
    setSelectedCharts((prevState) => ({
      ...prevState,
      [chart]: !prevState[chart],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900 text-white">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 w-full">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-200">
            User-Selectable Dashboard
          </h1>
          {/* Chart Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">
              Select Data to Display
            </h2>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCharts.barChart}
                  onChange={() => handleChartToggle("barChart")}
                  className="form-checkbox text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-600"
                />
                Show Weekly Workout Hours
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCharts.lineChart}
                  onChange={() => handleChartToggle("lineChart")}
                  className="form-checkbox text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-600"
                />
                Show Weight Progression
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCharts.drilldownChart}
                  onChange={() => handleChartToggle("drilldownChart")}
                  className="form-checkbox text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-600"
                />
                Show Calories Breakdown
              </label>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {selectedCharts.barChart && <BarChart />}
            {selectedCharts.lineChart && <LineChart />}
            {selectedCharts.drilldownChart && <DrilldownChart />}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
