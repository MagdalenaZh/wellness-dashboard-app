import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const FrontPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center bg-gray-800 p-20 rounded-lg shadow mb-12 animate-fade-in">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-8 text-blue-400 animate-slide-down">
                Welcome to Your Personal Dashboard
              </h1>
              <p className="text-xl text-gray-300 mb-8 animate-slide-up">
                Track your fitness, diet, and mental well-being—all in one
                place. Take control of your journey with powerful insights and
                tools designed just for you.
              </p>
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition transform hover:scale-105 animate-bounce-once">
                Get Started
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-200">
              What You Can Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow text-center transform hover:scale-105 transition">
                <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-dumbbell text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Fitness Tracking
                </h3>
                <p className="text-gray-300">
                  Monitor your workouts, set goals, and track your progress over
                  time.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow text-center transform hover:scale-105 transition">
                <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-utensils text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Diet Insights</h3>
                <p className="text-gray-300">
                  Keep track of your calorie intake, macros, and meal logs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow text-center transform hover:scale-105 transition">
                <div className="bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <i className="fas fa-smile text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Mental Well-being
                </h3>
                <p className="text-gray-300">
                  Reflect on your mood trends and maintain a healthy mindset.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-12 rounded-lg shadow text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Take Control of Your Journey?
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Join thousands of users who have transformed their lives with our
              all-in-one dashboard.
            </p>
            <button className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
              Sign Up Now
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
