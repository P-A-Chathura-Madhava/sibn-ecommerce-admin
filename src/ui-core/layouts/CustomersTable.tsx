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

const customers = [
  {
    customerId: "0001",
    status: "Inactive",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555-1234",
    address: "123 Main St, New York, NY",
    joined: "2024-04-15",
  },
  {
    customerId: "0002",
    status: "Active",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 555-5678",
    address: "456 Market Ave, San Francisco, CA",
    joined: "2024-03-22",
  },
  {
    customerId: "0003",
    status: "Inactive",
    name: "Mark Wilson",
    email: "mark.wilson@example.com",
    phone: "+1 555-9012",
    address: "789 Broadway Blvd, Los Angeles, CA",
    joined: "2024-05-01",
  },
  {
    customerId: "0004",
    status: "Active",
    name: "Lucy Brown",
    email: "lucy.brown@example.com",
    phone: "+1 555-3456",
    address: "321 Oak St, Chicago, IL",
    joined: "2024-02-10",
  },
];

type status = "Active" | "Inactive";

// colors for mapping
const statusMap: Record<status, string> = {
  Active: "text-[#0B91E4]",
  Inactive: "text-[#FF0000]",
};

export function CustomersTable() {
  return (
    <div>
      {/* Customer ID*/}
      <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[250px] h-[35px] mb-10">
        <div className="bg-[#CACACA] w-[150px] pl-1 rounded-[9px] flex items-center text-[13px] font-[400] rounded-l-[9px]">
          Customer ID
        </div>
        {/* Customer ID Input*/}
        <input
          type="text"
          placeholder="Ex. Samn2001"
          className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
        />
      </div>

      <div className="max-h-[400px] overflow-y-auto rounded-md">
        <Table className="mt-8 border-b-[1px]">
          <TableCaption>A list of your registered customers</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[16px] font-[400] text-black">
                Customer ID
              </TableHead>
              <TableHead className="text-[16px] font-[400] text-black">
                Name
              </TableHead>
              <TableHead className="text-[16px] font-[400] text-black">
                Email
              </TableHead>
              <TableHead className="text-[16px] font-[400] text-black">
                Phone
              </TableHead>
              <TableHead className="text-[16px] font-[400] text-black">
                Address
              </TableHead>
              <TableHead className="text-[16px] font-[400] text-black">
                Joined
              </TableHead>
              <TableHead className="text-[16px] font-[400] text-black">
                Status
              </TableHead>
              <TableHead className="text-[16px] font-[400] text-black text-right">
                Options
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow key={index}>
                <TableCell className="text-[13px] font-[400] text-black">
                  {customer.customerId}
                </TableCell>

                <TableCell className="text-[13px] font-[400] text-black">
                  {customer.name}
                </TableCell>
                <TableCell className="text-[13px] font-[400] text-black">
                  {customer.email}
                </TableCell>
                <TableCell className="text-[13px] font-[400] text-black">
                  {customer.phone}
                </TableCell>
                <TableCell className="text-[13px] font-[400] text-black w-[180px]">
                  {customer.address}
                </TableCell>
                <TableCell className="text-[13px] font-[400] text-black">
                  {customer.joined}
                </TableCell>
                <TableCell
                  className={`${
                    statusMap[customer.status as status]
                  } text-[13px] font-[400]`}
                >
                  {customer.status}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  {/* <Button variant="outline" size="sm">Edit</Button> */}
                  <Link
                    href="/edit-customer"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-muted"
                  >
                    Edit
                  </Link>
                  <Button variant="destructive" size="sm">
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
