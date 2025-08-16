"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    seller: "Saman2001",
    date: "2024-05-10",
    status: "Processing",
    total: "$150.00",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    seller: "Saman2001",
    date: "2024-05-12",
    status: "Shipped",
    total: "$299.99",
  },
  {
    id: "ORD003",
    customer: "Mark Wilson",
    seller: "Saman2001",
    date: "2024-05-13",
    status: "Delivered",
    total: "$89.99",
  },
  {
    id: "ORD004",
    customer: "Lucy Brown",
    seller: "Saman2001",
    date: "2024-05-14",
    status: "Cancelled",
    total: "$0.00",
  },
];

type OrderStatus = "Shipped" | "Cancelled" | "Delivered" | "Processing";

// colors for mapping
const statusColorMap: Record<OrderStatus, string> = {
  Shipped: "text-[#0B91E4]",
  Cancelled: "text-[#FF0000]",
  Delivered: "text-[#24C70E]",
  Processing: "text-orange-500",
};

export function OrdersTable() {
  return (
    <div className="max-h-[400px] overflow-y-auto rounded-md">
    <Table className="mt-8 border-b-2">
      <TableCaption>Recent customer orders</TableCaption>
      <TableHeader>
        <TableRow className="text-[16px] font-[400] text-black border-none">
          <TableHead className="text-[16px] font-[400] text-black" >Order ID</TableHead>
          <TableHead className="text-[16px] font-[400] text-black">Customer ID</TableHead>
          <TableHead className="text-[16px] font-[400] text-black">Seller ID</TableHead>
          <TableHead className="text-[16px] font-[400] text-black">Order Date</TableHead>
          <TableHead className="text-[16px] font-[400] text-black">Status</TableHead>
          <TableHead className="text-right text-[16px] font-[400] text-black">Total</TableHead>
          <TableHead className="text-right text-[16px] font-[400] text-black">Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index} className="border-b-2 ">
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.seller}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell
              className={`${statusColorMap[order.status as OrderStatus]} text-[13px] font-[400]`}
            >
              {order.status}
            </TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
            <TableCell className="text-right space-x-2">
              {/* <Button variant="outline" size="sm">View</Button> */}
              <Link
                href="/edit-order"
                className="inline-flex items-center justify-center rounded-md border-[1px] border-input bg-transparent w-[52px] h-[35px] text-[13px] font-[400] border-black transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-muted"
              >
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
