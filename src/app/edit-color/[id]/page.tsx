// "use client";

// import { EditColorComponent } from "@/ui-core/layouts/EditColorComponent";

// export default function EditColorPage() {
//   return (
//     <div className="px-8">
//       <EditColorComponent
//         initialData={{
//           name: "Sky Blue",
//           hexCode: "#87CEEB",
//         }}
//         onSubmit={(updatedColor) => {
//           // Handle API call or mutation here
//           console.log("Updated color:", updatedColor);
//         }}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { EditColorComponent } from "@/ui-core/layouts/EditColorComponent";
import { useProductContext } from "@/context/ProductContext";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function EditColorPage() {
  const { id } = useParams();
  const { getColorById, updateColorById } = useProductContext();

  const [initialData, setInitialData] = useState<{
    name: string;
    hexCode: string;
  } | null>(null);

  useEffect(() => {
    const fetchColor = async () => {
      if (!id) return;
      try {
        const color = await getColorById(Number(id));
        setInitialData({
          name: color.name,
          hexCode: color.hexCode,
        });
      } catch (error) {
        console.error("Error fetching color:", error);
      }
    };

    fetchColor();
  }, [id, getColorById]);

  const handleUpdate = async (updatedColor: {
    name: string;
    hexCode: string;
  }) => {
    try {
      await updateColorById(Number(id), updatedColor);
      console.log("Color updated successfully!");
      // Optionally redirect or show success feedback here
    } catch (error) {
      console.error("Failed to update color:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          {initialData ? (
            <EditColorComponent
              initialData={initialData}
              onSubmit={handleUpdate}
            />
          ) : (
            <p>Loading color...</p>
          )}
        </div>
      </div>
    </div>
  );
}
