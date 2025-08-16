"use client";

import { useState } from "react";
import { EditCustomerComponent } from "@/ui-core/layouts/EditCustomerComponent";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const initialCustomerData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 555-1234",
  address: "123 Main St, New York, NY",
  joined: "2024-04-15",
};

export default function EditCustomerPage() {
  const [customerData, setCustomerData] = useState(initialCustomerData);

  const handleUpdateCustomer = (updatedData: typeof initialCustomerData) => {
    // Here you could call an API or update state globally
    console.log("Customer updated:", updatedData);
    setCustomerData(updatedData);
    alert("Customer updated successfully!");
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          <EditCustomerComponent
            initialData={customerData}
            onSubmit={handleUpdateCustomer}
          />
        </div>
      </div>
    </div>
  );
}
