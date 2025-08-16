"use client";

import { useEffect, useState } from "react";
import { ProductsTable } from "@/ui-core/layouts/ProductsTable";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import SubNav from "@/ui-core/components/organisms/SubNav";

// Dummy categories
const dummyCategories = [
  { id: "cat1", name: "Laptops" },
  { id: "cat2", name: "Smartphones" },
  { id: "cat3", name: "Accessories" },
];

// Dummy sellers
const dummySellers = [
  { id: "seller1", name: "BestTech" },
  { id: "seller2", name: "SuperGadgets" },
  { id: "seller3", name: "TechWorld" },
];

// Dummy products
const dummyProducts = Array(20)
  .fill(null)
  .map((_, idx) => ({
    id: `prod-${idx + 1}`,
    name: `Product ${idx + 1}`,
    category: dummyCategories[idx % dummyCategories.length].name,
    seller: dummySellers[idx % dummySellers.length].name,
    price: (100 + idx * 10).toFixed(2),
    disPrice: idx % 2 === 0 ? (90 + idx * 10).toFixed(2) : null,
    imageUrls: ["/SIBN/laptop.png"],
  }));

function AllProductsPage() {
  const [products, setProducts] = useState(dummyProducts);
  const [categories] = useState(dummyCategories);
  const [sellers] = useState(dummySellers);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentSeller, setCurrentSeller] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Filter + Search
  const filteredProducts = products.filter((p) => {
    if (currentCategory && p.category !== currentCategory) return false;
    if (currentSeller && p.seller !== currentSeller) return false;
    if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      return false;
    return true;
  });

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleCategoryChange = (category: string | null) => {
    setSearchTerm("");
    setCurrentSeller(null);
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentCategory(null);
    setCurrentSeller(null);
    setCurrentPage(1);
  };

  const handleSellerChange = (seller: string | null) => {
    setSearchTerm("");
    setCurrentCategory(null);
    setCurrentSeller(seller);
    setCurrentPage(1);
  };

  const handleProductIdSearch = (id: string) => {
    setSearchTerm(id);
    setCurrentCategory(null);
    setCurrentSeller(null);
    setCurrentPage(1);
  };

  return (
    <div className="flex">
      <AppSidebar />
      <div className="p-6 w-full">
        <Navbar title="📦 All Product" />

        <div className="mt-10">
          <SubNav
            onSellerChange={handleSellerChange}
            onProductIdSearch={handleProductIdSearch}
          />
        </div>

        {/* Pass dummy paginated products into table */}
        <ProductsTable />

        <div className="mt-4 flex justify-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-1 border rounded">
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProductsPage;
