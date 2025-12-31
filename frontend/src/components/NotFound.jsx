import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-8xl font-bold text-[#588157] mb-4">404</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-green-700 text-white text-lg font-medium rounded-lg hover:bg-green-500 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
