import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart); // get cart from redux
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0); // total items

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="text-2xl font-bold text-blue-600">ShopEase</div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>
            <Link to="/cart" className="hover:text-blue-600 relative">
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
            <Link to="/login" className="hover:text-blue-600 font-semibold">
              Login
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-50">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link to="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="block hover:text-blue-600">
            Shop
          </Link>
          <Link to="/categories" className="block hover:text-blue-600">
            Categories
          </Link>
          <Link to="/contact" className="block hover:text-blue-600">
            Contact
          </Link>
          <Link to="/cart" className="block hover:text-blue-600 relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="block hover:text-blue-600 font-semibold">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
