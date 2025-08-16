"use client";
import React, { useState } from "react";
import { CategoriesTable } from "@/ui-core/layouts/CategoriesTable";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AppSidebar } from "@/components/ui/app-sidebar";

// Dummy categories
const dummyCategories = Array(10).fill(null).map((_, idx) => ({
  id: idx + 1,
  name: `Category ${idx + 1}`,
  slug: `category-${idx + 1}`,
  description: `This is a description for Category ${idx + 1}.`,
}));

export default function AllCategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(dummyCategories);

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFilteredCategories(dummyCategories);
      return;
    }
    const filtered = dummyCategories.filter((cat) =>
      cat.name.toLowerCase().includes(term)
    );
    setFilteredCategories(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setFilteredCategories(dummyCategories);
    }
  };

  return (
    <div className="flex">
      <AppSidebar />
      <div className="flex flex-col mt-6 w-full">
        <Navbar title="🧾 All Categories" />

        {/* Search Bar */}
        <div className="ml-10 mt-10">
          <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[350px] h-[35px]">
            <div className="bg-[#CACACA] w-[200px] pl-2 rounded-l-[9px] flex items-center text-[13px] font-[400]">
              Category Name
            </div>
            <input
              type="text"
              placeholder="Category Name"
              className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-gray-300 px-3 rounded-r-[9px] hover:bg-gray-400"
              aria-label="Search categories"
            >
              🔍
            </button>
          </div>
        </div>

        <div className="m-10 mt-0">
          <CategoriesTable categories={filteredCategories} />
        </div>
      </div>
    </div>
  );
}
