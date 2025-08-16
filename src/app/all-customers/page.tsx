import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { CustomersTable } from "@/ui-core/layouts/CustomersTable";
import React from "react";

function AllCustomersPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex">
        <AppSidebar/>
        <div className="flex flex-col mt-6 w-full">
          <Navbar title="👥 Customer Details"/>
          <div className="m-10">
            
            <CustomersTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCustomersPage;
