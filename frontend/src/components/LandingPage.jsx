import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to HyperMarket</h1>
      <p className="text-lg text-gray-600 mb-8">Your one-stop shop for fashion, electronics, groceries, and more.</p>
      <Link 
        to="/products" 
        className="px-6 py-3 bg-[#a7c957] hover:bg-[#8fb848] text-white rounded-lg shadow transition"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default LandingPage;
