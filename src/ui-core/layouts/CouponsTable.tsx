"use client";

import React, { useState } from "react";
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

// Dummy coupons
const dummyCoupons = [
  {
    id: 1,
    customerId: "0001",
    code: "SAVE20",
    discount: "20%",
    expiryDate: "2025-12-31",
    description: "Get 20% off on all electronics.",
  },
  {
    id: 2,
    customerId: "0002",
    code: "FREESHIP",
    discount: "100%",
    expiryDate: "2025-06-30",
    description: "Free shipping on orders above $50.",
  },
  {
    id: 3,
    customerId: "0003",
    code: "WELCOME10",
    discount: "10%",
    expiryDate: "2025-08-15",
    description: "10% off for new customers.",
  },
  {
    id: 4,
    customerId: "0004",
    code: "SPRING25",
    discount: "25%",
    expiryDate: "2025-04-30",
    description: "Spring Sale – 25% off selected items.",
  },
];

export function CouponsTable() {
  const [coupons, setCoupons] = useState(dummyCoupons);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this coupon?")) {
      setCoupons((prev) => prev.filter((c) => c.id !== id));
      alert(`Coupon with ID ${id} deleted!`);
    }
  };

  return (
    <div className="p-6">
      <div className="max-h-[400px] overflow-auto">
        <Table className="border-b-[1px] min-w-full">
          <TableCaption>A list of available coupons</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[16px] text-center font-[400] text-black">
                Customer ID
              </TableHead>
              <TableHead className="text-[16px] text-center font-[400] text-black">
                Code
              </TableHead>
              <TableHead className="text-[16px] text-center font-[400] text-black">
                Discount
              </TableHead>
              <TableHead className="text-[16px] text-center font-[400] text-black">
                Expiry Date
              </TableHead>
              <TableHead className="text-[16px] text-center font-[400] text-black">
                Description
              </TableHead>
              <TableHead className="text-right text-[16px] font-[400] text-black">
                Options
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {coupons.map((coupon) => (
              <TableRow key={coupon.id}>
                <TableCell className="text-[13px] text-center font-[400] text-black">
                  {coupon.customerId}
                </TableCell>
                <TableCell className="text-[13px] text-center font-[400] text-black">
                  {coupon.code}
                </TableCell>
                <TableCell className="text-[13px] text-center font-[400] text-black">
                  {coupon.discount}
                </TableCell>
                <TableCell className="text-[13px] text-center font-[400] text-black">
                  {coupon.expiryDate}
                </TableCell>
                <TableCell className="text-[13px] text-center font-[400] text-[#0B91E4]">
                  {coupon.description}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Link
                    href={`/edit-coupon/${coupon.id}`}
                    className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Edit
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(coupon.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
