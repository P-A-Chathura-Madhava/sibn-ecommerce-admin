"use client";

import { AreaChartCard } from "../components/organisms/AreaChartCard";
import { BarChartCard } from "../components/organisms/BarChartCard";
import DashboardOrdersTable from "../components/organisms/DashboardOrdersTable";

const customersChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const ordersChartData = [
  { month: "January", desktop: 100, mobile: 50 },
  { month: "February", desktop: 150, mobile: 90 },
  { month: "March", desktop: 200, mobile: 100 },
  { month: "April", desktop: 250, mobile: 150 },
  { month: "May", desktop: 180, mobile: 130 },
  { month: "June", desktop: 220, mobile: 160 },
];

export default function Dashboard() {
  return (
    <div>
      <div className="flex w-full justify-center items-center px-6 gap-10">
        {/* <AreaChartCard title="Customers / Visitors" subtitle="Showing total visitors for the last 6 months" /> */}
        <AreaChartCard
          title="Customers / Visitors"
          subtitle="Showing total visitors for the last 6 months"
          data={customersChartData}
        />
        {/* <AreaChartCard title="Orders" subtitle="Showing total orders for the last 6 months" /> */}
        <AreaChartCard
          title="Orders"
          subtitle="Showing total orders for the last 6 months"
          data={ordersChartData}
        />
      </div>
      <div className="flex justify-center items-center px-16 mt-10 gap-10">
        <div className="w-[50%]">
          <DashboardOrdersTable />
        </div>
        <div className="w-[50%]">
          <BarChartCard />
        </div>
      </div>
    </div>
  );
}
