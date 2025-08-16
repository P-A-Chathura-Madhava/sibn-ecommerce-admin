// "use client";

// import { useState } from "react";
// import { EditCouponComponent } from "@/ui-core/layouts/EditCouponComponent";

// export default function EditCouponPage() {
//   // Example initial coupon data that might come from an API or database
//   const initialCoupon = {
//     code: "SUMMER2025",
//     discount: "15",
//     expiryDate: "2025-12-31",
//     description: "Summer sale 15% off",
//   };

//   const [coupon, setCoupon] = useState(initialCoupon);

//   const handleUpdate = (updatedCoupon: typeof initialCoupon) => {
//     console.log("Coupon updated:", updatedCoupon);
//     // You could call an API here to save changes
//     setCoupon(updatedCoupon);
//     alert("Coupon updated successfully!");
//   };

//   return (
//     <div className="px-8">
//       <EditCouponComponent initialData={coupon} onSubmit={handleUpdate} />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useProductContext } from "@/context/ProductContext";
import Navbar from "@/ui-core/components/organisms/Navbar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import EditCouponComponent from "@/ui-core/layouts/EditCouponComponent";

export default function EditCouponPage() {
  const { id } = useParams();

  const { getCouponById, updateCouponById } = useProductContext();

  const [coupon, setCoupon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getCouponById(id)
        .then((data: any) => {
          setCoupon(data);
        })
        .catch((err: any) => {
          console.error("Failed to load coupon:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const handleUpdate = async (updatedCoupon: typeof coupon) => {
    try {
      await updateCouponById(id, {
        discount: Number(updatedCoupon.discount),
        description: updatedCoupon.description,
        expiryDate: updatedCoupon.expiryDate,
        code: updatedCoupon.code
      });
      alert("Coupon updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update coupon.");
    }
  };

  if (loading || !coupon) {
    return <div className="px-8">Loading coupon details...</div>;
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
          <EditCouponComponent
            coupon={coupon}
            onSubmit={handleUpdate}
            onDelete={()=>{}}
          />
        </div>
      </div>
    </div>
  );
}
