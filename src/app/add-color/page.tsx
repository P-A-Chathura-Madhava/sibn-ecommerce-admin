import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AddColorComponent } from "@/ui-core/layouts/AddColorComponent";
import React from "react";

function AddColorPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          <AddColorComponent />
        </div>
      </div>
    </div>
  );
}

export default AddColorPage;
