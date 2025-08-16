// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import Link from "next/link";

// // Example color data
// const colors = [
//   {
//     name: "Red",
//     hexCode: "#FF0000",
//   },
//   {
//     name: "Green",
//     hexCode: "#00FF00",
//   },
//   {
//     name: "Blue",
//     hexCode: "#0000FF",
//   },
//   {
//     name: "Yellow",
//     hexCode: "#FFFF00",
//   },
// ];

// export function ColorsTable() {
//   return (
//     <Table className="mt-8">
//       <TableCaption>A list of available colors</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Preview</TableHead>
//           <TableHead>Name</TableHead>
//           <TableHead>Hex Code</TableHead>
//           <TableHead className="text-right">Options</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {colors.map((color, index) => (
//           <TableRow key={index}>
//             <TableCell>
//               <div
//                 className="w-10 h-6 rounded-md border"
//                 style={{ backgroundColor: color.hexCode }}
//               />
//             </TableCell>
//             <TableCell className="font-medium">{color.name}</TableCell>
//             <TableCell>{color.hexCode}</TableCell>
//             <TableCell className="text-right space-x-2">
//               {/* <Button variant="outline" size="sm">Edit</Button> */}
//               <Link
//                 href="/edit-color"
//                 className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-muted"
//               >
//                 Edit
//               </Link>
//               <Button variant="destructive" size="sm">
//                 Delete
//               </Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { useProductContext } from "@/context/ProductContext"; // Adjust path as needed
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import Link from "next/link";

// export function ColorsTable() {
//   const { colors, fetchAllColors } = useProductContext();

//   useEffect(() => {
//     fetchAllColors();
//   }, []);

//   return (
//     <Table className="mt-8">
//       <TableCaption>A list of available colors</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Preview</TableHead>
//           <TableHead>Name</TableHead>
//           <TableHead>Hex Code</TableHead>
//           <TableHead className="text-right">Options</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {colors.map((color: any, index: number) => (
//           <TableRow key={index}>
//             <TableCell>
//               <div
//                 className="w-10 h-6 rounded-md border"
//                 style={{ backgroundColor: color.hexCode }}
//               />
//             </TableCell>
//             <TableCell className="font-medium">{color.name}</TableCell>
//             <TableCell>{color.hexCode}</TableCell>
//             <TableCell className="text-right space-x-2">
//               <Link
//                 href={`/edit-color/${color.id}`}
//                 className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-muted"
//               >
//                 Edit
//               </Link>
//               <Button variant="destructive" size="sm">
//                 Delete
//               </Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }

"use client";

import { useEffect } from "react";
import { useProductContext } from "@/context/ProductContext"; // Adjust path as needed
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
  const { colors, fetchAllColors, deleteColorById } = useProductContext();

  useEffect(() => {
    fetchAllColors();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this color?")) {
      try {
        await deleteColorById(id);
        await fetchAllColors(); // Refresh list after deletion
      } catch (error) {
        console.error("Failed to delete color:", error);
        alert("Error deleting color.");
      }
    }
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
        {colors.map((color: any, index: number) => (
          <TableRow key={index}>
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
                className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-muted"
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
