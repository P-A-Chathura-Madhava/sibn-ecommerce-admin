import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AddCategory } from "@/ui-core/layouts/AddCategory";
import { AddCategoryComponent } from "@/ui-core/layouts/AddCategoryComponent";
import React from "react";

function AddCategoryPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex">
        <AppSidebar />
        <div className="flex flex-col mt-6 w-full">
          <Navbar title="🧾 Add Categories"/>
          <div className="m-10">
            <AddCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryPage;
