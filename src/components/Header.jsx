import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <button
          className="lg:hidden text-gray-300 mr-4"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <h1 className="text-2xl font-bold">Fitness & Wellness Tracker</h1>
      </div>
      <span className="text-gray-400">{new Date().toLocaleDateString()}</span>
    </header>
  );
};

export default Header;
