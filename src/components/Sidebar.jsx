import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed lg:static top-0 left-0 h-full bg-gray-800 text-gray-300 w-64 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <button
        className="lg:hidden absolute top-4 right-4 text-gray-300"
        onClick={toggleSidebar}
      >
        ✕
      </button>

      <nav className="p-6 space-y-4">
        <ul>
          <li>
            <Link
              to="/"
              className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition"
              onClick={toggleSidebar}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/gym-progress"
              className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition"
              onClick={toggleSidebar}
            >
              Gym Progress
            </Link>
          </li>
          <li>
            <Link
              to="/diet-insights"
              className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition"
              onClick={toggleSidebar}
            >
              Diet Insights
            </Link>
          </li>
          <li>
            <Link
              to="/mood-trends"
              className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition"
              onClick={toggleSidebar}
            >
              Mood Trends
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
