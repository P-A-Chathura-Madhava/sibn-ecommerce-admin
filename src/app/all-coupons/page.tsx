"use client";

import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { CouponsTable } from "@/ui-core/layouts/CouponsTable";

export default function AllCouponsPage() {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="flex flex-col mt-6 w-full">
        <Navbar title="🎟️ All Coupons" />
        <div className="m-10">
          <CouponsTable />
        </div>
      </div>
    </div>
  );
}
