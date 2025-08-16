import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { ColorsTable } from "@/ui-core/layouts/ColorsTable";
import React from "react";

function AllColorsPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          <ColorsTable />
        </div>
      </div>
    </div>
  );
}

export default AllColorsPage;
