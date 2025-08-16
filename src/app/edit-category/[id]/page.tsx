// "use client";

// import { EditCategoryComponent } from "@/ui-core/layouts/EditCategoryComponent";

// export default function EditCategoryPage() {
//   return (
//     <div className="px-8">
//       <EditCategoryComponent
//         initialData={{
//           name: "Electronics",
//           slug: "electronics",
//           description: "All types of electronic gadgets and accessories.",
//           imageUrl: "https://via.placeholder.com/60",
//         }}
//         onSubmit={(updatedCategory) => {
//           // Handle update logic
//           console.log("Updated category:", updatedCategory);
//         }}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import { EditCategoryComponent } from "@/ui-core/layouts/EditCategoryComponent";
import { useProductContext } from "@/context/ProductContext";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { EditCategoryComponent } from "@/ui-core/layouts/EditCategoryComponent";

export default function EditCategoryPage() {
  const { id } = useParams();
  const { getCategoryById, updateCategoryById } = useProductContext();

  const [initialData, setInitialData] = useState({
    id: "",
    name: "",
    slug: "",
    description: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchCategory = async () => {
        try {
          const category = await getCategoryById(id);
          setInitialData({
            id: category.id,
            name: category.name,
            slug: category.slug,
            description: category.description,
            imageUrl: category.imageUrl,
          });
        } catch (error) {
          console.error("Failed to load category:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCategory();
    }
  }, []);

  const handleSubmit = async (updatedData: typeof initialData) => {
    try {
      await updateCategoryById(String(id), updatedData); // ✅ use `String(id)` instead of `Number(id)`
      alert("Category updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update category.");
    }
  };

  if (loading) return <p className="px-8 mt-8">Loading category...</p>;

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          <EditCategoryComponent
            category={initialData}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
