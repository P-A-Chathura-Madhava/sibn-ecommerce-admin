"use client";

import React from "react";

interface SubNavbarProps {
  categories: { id: string; name: string }[];
  sellers: string[];
  selectedCategory: string | null;
  selectedSeller: string | null;
  searchTerm: string;
  onCategoryChange: (category: string | null) => void;
  onSellerChange: (seller: string | null) => void;
  onSearch: (searchTerm: string) => void;
}

const SubNavbar: React.FC<SubNavbarProps> = ({
  categories,
  sellers,
  selectedCategory,
  selectedSeller,
  searchTerm,
  onCategoryChange,
  onSellerChange,
  onSearch,
}) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || null;
    onCategoryChange(value);
  };

  const handleSellerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || null;
    onSellerChange(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-100 rounded-xl shadow">
      {/* Category ComboBox */}
      {/* <select
        value={selectedCategory || ""}
        onChange={handleCategoryChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select> */}
      <select
  value={selectedCategory || ""}
  onChange={handleCategoryChange}
  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  <option value="">All Categories</option>
  {categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ))}
</select>

      {/* Seller ComboBox */}
      <select
        value={selectedSeller || ""}
        onChange={handleSellerChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="">Select Seller</option>
        {sellers.map((seller) => (
          <option key={seller} value={seller}>
            {seller}
          </option>
        ))}
      </select>

      {/* Search Field */}
      <div className="flex w-full sm:w-auto items-center gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default SubNavbar;
