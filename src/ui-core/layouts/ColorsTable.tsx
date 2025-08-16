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

export function ColorsTable() {
  // Dummy color data
  const colors = [
    { id: 1, name: "Red", hexCode: "#FF0000" },
    { id: 2, name: "Green", hexCode: "#00FF00" },
    { id: 3, name: "Blue", hexCode: "#0000FF" },
    { id: 4, name: "Yellow", hexCode: "#FFFF00" },
    { id: 5, name: "Purple", hexCode: "#800080" },
  ];

  const handleDelete = (id: number) => {
    alert(`Deleted color with id: ${id}`);
  };

  return (
    <Table className="mt-8">
      <TableCaption>A list of available colors</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Preview</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Hex Code</TableHead>
          <TableHead className="text-right">Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {colors.map((color) => (
          <TableRow key={color.id}>
            <TableCell>
              <div
                className="w-10 h-6 rounded-md border"
                style={{ backgroundColor: color.hexCode }}
              />
            </TableCell>
            <TableCell className="font-medium">{color.name}</TableCell>
            <TableCell>{color.hexCode}</TableCell>
            <TableCell className="text-right space-x-2">
              <Link
                href={`/edit-color/${color.id}`}
                className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Edit
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(color.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
