import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { UsersTable } from "@/ui-core/layouts/UsersTable";
import React from "react";

function AllUsers() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex">
        <AppSidebar/>
        <div className="flex flex-col mt-6 w-full">
          <Navbar title="👤 User Details"/>
          <div className="m-10">
            
            <UsersTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
