import { AppSidebar } from "@/components/ui/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import Dashboard from "@/ui-core/layouts/Dashboard";
import Image from "next/image";

/* Admin Dashboard */

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex">
        <AppSidebar />
        <div className="flex flex-col mt-6 w-full">
          <Navbar title="👋 Welcome Back, Admin!"/>
          <div className="m-10">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
