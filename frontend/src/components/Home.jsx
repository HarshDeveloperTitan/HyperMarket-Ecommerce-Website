import React, { useState, useMemo } from "react";
import Card from "./Card.jsx";
import products from "../data-api/product.js";

const Home = () => {
  const [sortBy, setSortBy] = useState("relevance");
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    rating: 0,
    priceRange: { min: 0, max: 3000 },
  });

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    []
  );
  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))], []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      if (filterType === "category" || filterType === "brand") {
        const newValues = prevFilters[filterType].includes(value)
          ? prevFilters[filterType].filter((item) => item !== value)
          : [...prevFilters[filterType], value];
        return { ...prevFilters, [filterType]: newValues };
      } else {
        return { ...prevFilters, [filterType]: value };
      }
    });
  };

  // Filter products without search
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const brandMatch =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const ratingMatch = product.rating >= filters.rating;
    const priceMatch =
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max;

    return categoryMatch && brandMatch && ratingMatch && priceMatch;
  });

  if (sortBy) {
    filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }

  return (
    <div className="flex bg-gray-50">
      <aside className="w-1/5 p-4 bg-white shadow-md">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-1">
              <input
                type="checkbox"
                id={category}
                value={category}
                onChange={() => handleFilterChange("category", category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Brand</h3>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center mb-1">
              <input
                type="checkbox"
                id={brand}
                value={brand}
                onChange={() => handleFilterChange("brand", brand)}
                className="mr-2"
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Customer Rating</h3>
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center mb-1">
              <input
                type="radio"
                id={`rating-${rating}`}
                name="rating"
                onChange={() => handleFilterChange("rating", rating)}
                className="mr-2"
              />
              <label htmlFor={`rating-${rating}`}>{rating}★ & above</label>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="flex items-center">
            <input
              type="range"
              min="0"
              max="3000"
              value={filters.priceRange.max}
              onChange={(e) =>
                handleFilterChange("priceRange", {
                  ...filters.priceRange,
                  max: Number(e.target.value),
                })
              }
              className="w-full"
            />
          </div>
          <div className="text-center mt-1">
            ${filters.priceRange.min} - ${filters.priceRange.max}
          </div>
        </div>
      </aside>

      <main className="w-4/5 p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg">
            Showing {filteredProducts.length} of {products.length} products
          </span>
          <div>
            <label htmlFor="sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border rounded-md shadow-sm"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Customer Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} productObj={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
