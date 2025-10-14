import React from "react";
import heroImage from "../assets/Photo-1.jpg"; // Replace with your image path

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-16 md:py-24">
        
        {/* Left: Text content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shop the Best Deals at HyperMarket
          </h1>
          <p className="text-gray-700 mb-6">
            Discover top-quality products from your favorite brands at unbeatable prices. Everything you need, in one place.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Shop Now
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Shopping Hero"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
