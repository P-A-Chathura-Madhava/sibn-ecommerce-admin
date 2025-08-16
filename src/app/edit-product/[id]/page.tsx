"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useProductContext } from "@/context/ProductContext";
import { EditProductComponent } from "@/ui-core/layouts/EditProductComponent";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

// Define the shape of the product form data
type ProductFormData = {
  name: string;
  description: string;
  category: string;
  imageUrls: string[];
  price: number;
  sellerId: string;
  stocks: number;
  discount: number;
  disPrice: string;
  variants: string[];
};

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const { getProductById, updateProductById } = useProductContext();

  const [productData, setProductData] = useState<ProductFormData | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const product = await getProductById(id as string);
          // console.log(product);
          

          setProductData({
            name: product.name || "",
            description: product.description || "",
            category: product.category || "Book & Stationary",
            imageUrls: product.imageUrls || [""], // or product.imageUrls?.[0] if it's an array
            price: product.price || 0,
            sellerId: product.sellerId || "",
            stocks: product.stocks || 0,
            discount: product.discount || 0,
            disPrice: product.disPrice || "",
            variants: product.variants || ["XL"],
          });
        } catch (error) {
          alert("Failed to fetch product");
        }
      };

      fetchProduct();
    }
  }, []);

const handleSubmit = async (updatedData: ProductFormData) => {
  try {
    const updateBody = {
      name: updatedData.name,
      price: updatedData.price, // <-- Include price
      stocks: updatedData.stocks,
      discount: updatedData.discount,
      disPrice: updatedData.disPrice,
      variants: updatedData.variants,
      imageUrls: updatedData.imageUrls, // <-- Make sure this is an array
    };

    await updateProductById(id, updateBody);
    alert("Product updated successfully!");
    // router.push("/products");
  } catch (error) {
    alert("Failed to update product");
  }
};


  return (
    <div className="flex">
      <AppSidebar />
      <div className="px-8 w-full">
        <SidebarTrigger />
        {productData ? (
          <EditProductComponent
            product={productData}
            onSubmit={handleSubmit}
          />
        ) : (
          <p className="mt-8 text-center">Loading product data...</p>
        )}
      </div>
    </div>
  );
}
