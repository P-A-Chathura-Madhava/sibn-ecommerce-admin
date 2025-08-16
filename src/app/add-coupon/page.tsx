import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import AddCoupon from "@/ui-core/layouts/AddCoupon";
import { AddCouponComponent } from "@/ui-core/layouts/AddCouponComponent";
import React from "react";

function AddCouponPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex">
        <AppSidebar />
        <div className="flex flex-col mt-6 w-full">
          <Navbar title="🎟️ Add Coupon" />
          <div className="m-10">
            <AddCoupon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCouponPage;
