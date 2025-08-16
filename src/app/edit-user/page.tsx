"use client";

import { useState } from "react";
import { EditUserComponent } from "@/ui-core/layouts/EditUserComponent";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const initialUserData = {
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "Admin",
  status: "Active",
};

export default function EditUserPage() {
  const [user, setUser] = useState(initialUserData);

  const handleUserUpdate = (updatedUserData: typeof initialUserData) => {
    console.log("User updated:", updatedUserData);
    // Here you can add your update logic, e.g. API call to save changes
    setUser(updatedUserData); // Update local state with new data
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          <EditUserComponent initialData={user} onSubmit={handleUserUpdate} />
        </div>
      </div>
    </div>
  );
}
