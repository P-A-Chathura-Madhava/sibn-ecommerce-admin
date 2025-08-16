"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { EditOrderComponent } from "@/ui-core/layouts/EditOrderComponent";

export default function EditOrderPage() {
  const initialOrder = {
    id: "ORD001",
    customer: "John Doe",
    date: "2024-05-10",
    status: "Processing",
    total: "$150.00",
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          <EditOrderComponent
            initialData={initialOrder}
            onSubmit={(updatedOrder) => {
              // Your update logic here (e.g., API call)
              console.log("Order updated:", updatedOrder);
            }}
          />
        </div>
      </div>
    </div>
  );
}
