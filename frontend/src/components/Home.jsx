import React, { useState, useMemo } from "react";
import Card from "./Card.jsx";
import products from "../data-api/product.js";
import { useSearch } from "../context/SearchContext.jsx";

const Home = () => {
  const { search } = useSearch();
  const [sortBy, setSortBy] = useState("relevance");

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    rating: 0, // 0 means "Any rating"
    priceRange: { min: 0, max: 3000 },
  });

  // Extract unique categories and brands
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))].sort(),
    []
  );

  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))].sort(),
    []
  );

  // Handle filter changes (checkboxes, radio, price)
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "category" || filterType === "brand") {
        const arr = prev[filterType];
        return {
          ...prev,
          [filterType]: arr.includes(value)
            ? arr.filter((item) => item !== value)
            : [...arr, value],
        };
      } else if (filterType === "priceRange") {
        return { ...prev, priceRange: value };
      } else {
        return { ...prev, [filterType]: value };
      }
    });
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const searchTerm = (search || "").trim().toLowerCase();

      // Search: match in title, brand, category, or description
      const searchMatch =
        !searchTerm ||
        [product.title, product.brand, product.category, product.description]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(searchTerm));

      // Category filter
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(product.category);

      // Brand filter
      const brandMatch =
        filters.brand.length === 0 ||
        (product.brand && filters.brand.includes(product.brand));

      // Rating filter (e.g., 4★ & above means rating >= 4)
      const ratingMatch = product.rating >= filters.rating;

      // Price filter
      const priceMatch =
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;

      return (
        searchMatch && categoryMatch && brandMatch && ratingMatch && priceMatch
      );
    });

    // Sorting
    if (sortBy !== "relevance" || !search) {
      filtered.sort((a, b) => {
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
    } else if (sortBy === "relevance" && search) {
      // Relevance sorting when searching: prioritize exact/partial matches in title > brand > category
      const term = search.toLowerCase();
      filtered.sort((a, b) => {
        const score = (p) => {
          const title = p.title?.toLowerCase() || "";
          const brand = p.brand?.toLowerCase() || "";
          const category = p.category?.toLowerCase() || "";

          if (title.includes(term)) return title.startsWith(term) ? 4 : 3;
          if (brand.includes(term)) return 2;
          if (category.includes(term)) return 1;
          return 0;
        };
        return score(b) - score(a);
      });
    }

    return filtered;
  }, [products, search, filters, sortBy]);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar Filters */}
      <aside className="w-64 p-6 bg-white shadow-lg hidden lg:block">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        {/* Category */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-lg">Category</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`cat-${category}`}
                checked={filters.category.includes(category)}
                onChange={() => handleFilterChange("category", category)}
                className="mr-3 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor={`cat-${category}`} className="cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>

        {/* Brand */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-lg">Brand</h3>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`brand-${brand}`}
                checked={filters.brand.includes(brand)}
                onChange={() => handleFilterChange("brand", brand)}
                className="mr-3 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor={`brand-${brand}`} className="cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-lg">Customer Rating</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="rating-any"
                name="rating"
                checked={filters.rating === 0}
                onChange={() => handleFilterChange("rating", 0)}
                className="mr-3 h-4 w-4 text-blue-600"
              />
              <label htmlFor="rating-any" className="cursor-pointer">
                Any
              </label>
            </div>
            {[4, 3, 2, 1].map((r) => (
              <div key={r} className="flex items-center">
                <input
                  type="radio"
                  id={`rating-${r}`}
                  name="rating"
                  checked={filters.rating === r}
                  onChange={() => handleFilterChange("rating", r)}
                  className="mr-3 h-4 w-4 text-blue-600"
                />
                <label htmlFor={`rating-${r}`} className="cursor-pointer">
                  {r}★ & above
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Price Range</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Min</label>
              <input
                type="number"
                min="0"
                max={filters.priceRange.max}
                value={filters.priceRange.min}
                onChange={(e) =>
                  handleFilterChange("priceRange", {
                    ...filters.priceRange,
                    min: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Max</label>
              <input
                type="number"
                min={filters.priceRange.min}
                max="5000"
                value={filters.priceRange.max}
                onChange={(e) =>
                  handleFilterChange("priceRange", {
                    ...filters.priceRange,
                    max: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="text-center text-sm text-gray-600">
              ${filters.priceRange.min} - ${filters.priceRange.max}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <p className="text-lg text-gray-700">
            Showing <strong>{filteredAndSortedProducts.length}</strong> of{" "}
            <strong>{products.length}</strong> products
          </p>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <Card key={product.id} productObj={product} />
          ))}
        </div>

        {/* No results message */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found matching your filters.
            </p>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
