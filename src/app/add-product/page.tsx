import { AppSidebar } from "@/components/ui/app-sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AddProducts } from "@/ui-core/layouts/AddProducts";
import React from "react";

function AddProductPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex">
        <AppSidebar />
        <div className="flex flex-col mt-6 w-full">
          <Navbar title=" 📦 Add Product"/>
          <div className="m-10">
            <AddProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
