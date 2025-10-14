import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-blue-300 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left section: Logo + Home */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          HyperMarket
        </Link>

        <Link to="/" className="text-gray-700 hover:text-gray-900 text-lg">
          <i className="fas fa-home"></i>
        </Link>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-lg mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right section: Cart + Login */}
      <div className="flex items-center space-x-6 text-lg">
        {/* Cart */}
        <Link to="/cart" className="relative text-gray-700 hover:text-gray-900">
          <i className="fas fa-shopping-cart"></i>
          {quantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
              {quantity}
            </span>
          )}
        </Link>

        {/* Login (nav-style) */}
        <Link
          to="/login"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
