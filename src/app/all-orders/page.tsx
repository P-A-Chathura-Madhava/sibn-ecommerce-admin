import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { OrdersNavBar } from "@/ui-core/components/organisms/OrdersNavbar";
import { OrdersTable } from "@/ui-core/layouts/OrdersTable";
import React from "react";

function OrdersPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex">
        <AppSidebar />
        <div className="flex flex-col mt-6 w-full">
          <Navbar title="🛒 Orders"/>
          <div className="m-10">
            <OrdersNavBar/>
            <OrdersTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
// "use client"

// import { Button } from "@/components/ui/button"
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// const orders = [
//   {
//     id: "ORD001",
//     customer: "John Doe",
//     date: "2024-05-10",
//     status: "Processing",
//     total: "$150.00",
//   },
//   {
//     id: "ORD002",
//     customer: "Jane Smith",
//     date: "2024-05-12",
//     status: "Shipped",
//     total: "$299.99",
//   },
//   {
//     id: "ORD003",
//     customer: "Mark Wilson",
//     date: "2024-05-13",
//     status: "Delivered",
//     total: "$89.99",
//   },
//   {
//     id: "ORD004",
//     customer: "Lucy Brown",
//     date: "2024-05-14",
//     status: "Cancelled",
//     total: "$0.00",
//   },
// ]

// export function OrdersTable() {
//   return (
//     <Table className="mt-8">
//       <TableCaption>Recent customer orders</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Order ID</TableHead>
//           <TableHead>Customer</TableHead>
//           <TableHead>Date</TableHead>
//           <TableHead>Status</TableHead>
//           <TableHead className="text-right">Total</TableHead>
//           <TableHead className="text-right">Options</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {orders.map((order, index) => (
//           <TableRow key={index}>
//             <TableCell className="font-medium">{order.id}</TableCell>
//             <TableCell>{order.customer}</TableCell>
//             <TableCell>{order.date}</TableCell>
//             <TableCell>{order.status}</TableCell>
//             <TableCell className="text-right">{order.total}</TableCell>
//             <TableCell className="text-right space-x-2">
//               <Button variant="outline" size="sm">View</Button>
//               <Button variant="destructive" size="sm">Cancel</Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   )
// }
