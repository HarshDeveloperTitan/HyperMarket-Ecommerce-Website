import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-white mb-4">About HyperMarket</h3>
          <p className="text-sm leading-relaxed">
            HyperMarket is your one-stop shop for everything from fashion to
            electronics. We deliver quality and convenience at your fingertips.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {["Fashion", "Electronics", "Home & Living", "Grocery"].map((cat, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            {["Help Center", "Returns", "Shipping Info", "Contact Us"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition-colors duration-200">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-12 py-5">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} HyperMarket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
