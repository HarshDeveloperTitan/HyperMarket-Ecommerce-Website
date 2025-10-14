import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to HyperMarket</h1>
      <p className="text-lg text-gray-600 mb-8">Your one-stop shop for fashion, electronics, groceries, and more.</p>
      <Link 
        to="/products" 
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default LandingPage;
