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

export function CategoriesTable({ categories }: { categories: any[] }) {
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      alert(`Deleted category with ID: ${id}`);
    }
  };

  if (!categories || categories.length === 0)
    return <p className="mt-8 text-center">No categories found.</p>;

  return (
    <div className="mt-8 max-h-[500px] overflow-auto rounded-md">
      <Table className="min-w-[800px]">
        <TableCaption>A list of product categories</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-[400] text-[16px] text-black">
              Category ID
            </TableHead>
            <TableHead className="font-[400] text-[16px] text-black">
              Name
            </TableHead>
            <TableHead className="font-[400] text-[16px] text-black">
              Slug
            </TableHead>
            <TableHead className="font-[400] text-[16px] text-black">
              Description
            </TableHead>
            <TableHead className="text-right font-[400] text-[16px] text-black">
              Options
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id} className="bg-[#F9F9F9]">
              <TableCell className="pl-5 text-[13px] font-[400] text-black">
                {category.id}
              </TableCell>
              <TableCell className="text-[13px] font-[400] text-black">
                {category.name}
              </TableCell>
              <TableCell className="text-[13px] font-[400] text-black">
                {category.slug}
              </TableCell>
              <TableCell className="text-[13px] font-[400] text-black">
                {category.description}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Link
                  href={`/edit-category/${category.id}`}
                  className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Edit
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(category.id)}
                >
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
