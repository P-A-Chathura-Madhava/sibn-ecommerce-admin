"use client";

import { useProductContext } from "@/context/ProductContext";
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

export function FilteredProductsTable() {
  const { products, loading, deleteProductById, pagination, fetchPaginatedProducts, currentCategory } = useProductContext();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await deleteProductById(Number(id)); // Note: Your context expects number ID

      toast.success("Product deleted successfully");
      // Refresh current page after deletion (optional if deleteProductById does not do this)
      await fetchPaginatedProducts(pagination.currentPage, 8, currentCategory || undefined);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <p className="mt-8 text-center">Loading products...</p>;

  if (products.length === 0)
    return <p className="mt-8 text-center">No products found.</p>;

  return (
    <>
      <Table className="mt-8">
        <TableCaption>A list of available products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Options</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  src={product.imageUrl || "https://via.placeholder.com/60"}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {product.description}
              </TableCell>
              <TableCell className="text-right space-x-2 flex-nowrap flex">
                <Link
                  href={`/edit-product/${product.id}`}
                  className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-muted"
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
      <ToastContainer position="top-center" />
    </>
  );
}
