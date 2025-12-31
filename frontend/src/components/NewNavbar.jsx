import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearch } from "../context/SearchContext.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { search, setSearch } = useSearch();

  // Define the search input inline — stable, no re-creation issues
  const renderSearchInput = () => (
    <div className="relative">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        autoComplete="off"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="text-2xl font-bold text-[#588157]">
            ShopEase
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 mx-6 max-w-lg">
            {renderSearchInput()}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-600 transition">
              Products
            </Link>
            <Link
              to="/cart"
              className="relative hover:text-blue-600 transition"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <Link
              to="/login"
              className="hover:text-blue-600 font-semibold transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 space-y-4 bg-gray-50 border-t">
          {/* Mobile Search */}
          {renderSearchInput()}

          <Link
            to="/"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block py-2 hover:text-blue-600 transition relative"
            onClick={() => setIsOpen(false)}
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute top-1/2 -translate-y-1/2 left-16 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block py-2 hover:text-blue-600 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
