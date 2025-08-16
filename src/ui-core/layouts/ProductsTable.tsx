"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dummy data
const dummyProducts = Array(10).fill(null).map((_, idx) => ({
  id: idx + 1,
  name: `Product ${idx + 1}`,
  category: { name: ["Electronics", "Clothing", "Books"][idx % 3] },
  description: "This is a sample description for the product.",
  imageUrl:
    [
      "https://i5.walmartimages.com/seo/HP-15-6-Touch-Screen-Laptop-Intel-Core-i3-8GB-Memory-256GB-SSD-Silver-Notebook-PC_435571a0-a644-4f27-9e39-19e6c16f76c0.74549be46a6830f4a58dcf9502abc982.jpeg",
      "https://hewlettcomputersolution.co.ke/wp-content/uploads/2024/10/Hp-Laptop-15s-Core-i5-1235U.png",
      "https://i5.walmartimages.com/asr/7f6319a6-63ca-4863-9ced-e873da92bd67.921810a8c66b7e020f60f758229fe820.jpeg"
    ][idx % 3],
}));

export function ProductsTable() {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate API
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    } finally {
      setDeletingId(null);
    }
  };

  if (!dummyProducts || dummyProducts.length === 0)
    return <p className="mt-8 text-center">No products found.</p>;

  return (
    <>
      <div className="mt-8 max-h-[500px] overflow-y-auto rounded-md">
        <Table className="min-w-full">
          <TableCaption>A list of available products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-black text-[16px] font-[400]">
                Image
              </TableHead>
              <TableHead className="text-black text-[16px] font-[400]">
                Product Name
              </TableHead>
              <TableHead className="text-black text-[16px] font-[400]">
                Category
              </TableHead>
              <TableHead className="text-black text-[16px] font-[400]">
                Description
              </TableHead>
              <TableHead className="text-right text-black text-[16px] font-[400]">
                Options
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyProducts.map((product) => (
              <TableRow key={product.id} className="h-[88px]">
                <TableCell>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                    unoptimized
                  />
                </TableCell>
                <TableCell className="font-[400] w-[159px] text-[13px] text-black">
                  {product.name}
                </TableCell>
                <TableCell className="text-[13px] font-[400] text-black">
                  {product.category ? product.category.name : "No category"}
                </TableCell>
                <TableCell className="text-[13px] font-[400] text-black">
                  {product.description}
                </TableCell>
                <TableCell className="justify-end space-x-2 flex-nowrap flex h-[88px] items-center">
                  <Link
                    href={`/edit-product/${product.id}`}
                    className="inline-flex items-center h-[35px] w-[52px] justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-muted"
                  >
                    Edit
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(String(product.id))}
                    disabled={deletingId === String(product.id)}
                  >
                    {deletingId === String(product.id) ? "Deleting..." : "Delete"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}
