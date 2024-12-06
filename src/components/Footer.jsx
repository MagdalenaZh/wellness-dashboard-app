import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-auto">
      <p>
        &copy; {new Date().getFullYear()} Fitness & Wellness Tracker. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
