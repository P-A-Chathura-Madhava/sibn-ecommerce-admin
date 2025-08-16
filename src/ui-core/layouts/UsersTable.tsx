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

// Example user data
const users = [
  {
    adminId: "0001",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    adminId: "0002",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    adminId: "0003",
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "Manager",
    status: "Active",
  },
  {
    adminId: "0004",
    name: "Dana White",
    email: "dana@example.com",
    role: "Customer",
    status: "Pending",
  },
];

type status = "Active" | "Inactive" | "Pending";

// colors for mapping
const statusMap: Record<status, string> = {
  Active: "text-green-500",
  Inactive: "text-[#FF0000]",
  Pending: "text-[#0B91E4]",
};

export function UsersTable() {
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
          placeholder="Ex. 0001"
          className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
        />
      </div>

      <Table className="mt-8 border-b-[1px]">
        <TableCaption>A list of registered users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[16px] text-center font-[400] text-black">
              Admin ID
            </TableHead>
            <TableHead className="text-[16px] text-center font-[400] text-black">
              Name
            </TableHead>
            <TableHead className="text-[16px] text-center font-[400] text-black">
              Email
            </TableHead>
            <TableHead className="text-[16px] text-center  font-[400] text-black">
              Role
            </TableHead>
            <TableHead className="text-[16px] text-center font-[400] text-black">
              Status
            </TableHead>
            <TableHead className="text-[16px] text-center font-[400] text-black ">
              Options
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="text-[13px] text-center font-[400] text-black">
                {user.adminId}
              </TableCell>
              <TableCell className="text-[13px] text-center  font-[400] text-black">
                {user.name}
              </TableCell>
              <TableCell className="text-[13px] text-center  font-[400] text-black">
                {user.email}
              </TableCell>
              <TableCell className="text-[13px] text-center  font-[400] text-black">
                {user.role}
              </TableCell>
              <TableCell
                className={`${
                  statusMap[user.status as status]
                } text-[13px] font-[400] text-center `}
              >
                {user.status}
              </TableCell>
              <TableCell className="text-center space-x-2">
                {/* <Button variant="outline" size="sm">Edit</Button> */}
                <Link
                  href="/edit-user"
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
  );
}
