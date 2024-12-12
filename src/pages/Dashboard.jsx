import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const FrontPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-800 p-10 rounded-lg shadow mb-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4 text-blue-400">
                Welcome to Your Personal Dashboard
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Track your fitness, diet, and mental well-being—all in one
                place. Take control of your journey with powerful insights and
                tools designed just for you.
              </p>
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition">
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Dashboard Preview"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
              What You Can Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow text-center">
                <div className="bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                  <i className="fas fa-dumbbell text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fitness Tracking</h3>
                <p className="text-gray-300">
                  Monitor your workouts, set goals, and track your progress over
                  time.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow text-center">
                <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                  <i className="fas fa-utensils text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diet Insights</h3>
                <p className="text-gray-300">
                  Keep track of your calorie intake, macros, and meal logs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow text-center">
                <div className="bg-purple-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                  <i className="fas fa-smile text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Mental Well-being
                </h3>
                <p className="text-gray-300">
                  Reflect on your mood trends and maintain a healthy mindset.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Control of Your Journey?
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Join thousands of users who have transformed their lives with our
              all-in-one dashboard.
            </p>
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
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
