// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";

// export function AddCouponComponent() {
//   const [formData, setFormData] = useState({
//     code: "",
//     discount: "",
//     expiryDate: "",
//     description: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Coupon submitted:", formData);
//     // API call logic here
//   };

//   return (
//     <Card className="w-full mt-8">
//       <CardHeader>
//         <CardTitle>Add New Coupon</CardTitle>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="grid gap-6">
//           <div className="grid gap-2">
//             <Label htmlFor="code">Coupon Code</Label>
//             <Input
//               id="code"
//               name="code"
//               placeholder="Enter coupon code"
//               value={formData.code}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="discount">Discount (%)</Label>
//             <Input
//               id="discount"
//               name="discount"
//               type="number"
//               placeholder="Enter discount percentage"
//               value={formData.discount}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="expiryDate">Expiry Date</Label>
//             <Input
//               id="expiryDate"
//               name="expiryDate"
//               type="date"
//               value={formData.expiryDate}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="description">Description</Label>
//             <Textarea
//               id="description"
//               name="description"
//               placeholder="Optional description"
//               rows={3}
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </div>
//         </CardContent>

//         <CardFooter className="justify-end">
//           <Button type="submit">Add Coupon</Button>
//         </CardFooter>
//       </form>
//     </Card>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useProductContext } from "@/context/ProductContext";

export function AddCouponComponent() {
  const { createCoupon } = useProductContext();
  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    expiryDate: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCoupon({
        code: formData.code,
        discount: Number(formData.discount),
        expiryDate: formData.expiryDate,
        description: formData.description,
      });
      alert("Coupon created successfully!");
      setFormData({ code: "", discount: "", expiryDate: "", description: "" });
    } catch (error) {
      alert("Failed to create coupon.");
    }
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Add New Coupon</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="code">Coupon Code</Label>
            <Input
              id="code"
              name="code"
              placeholder="Enter coupon code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="discount">Discount (%)</Label>
            <Input
              id="discount"
              name="discount"
              type="number"
              placeholder="Enter discount percentage"
              value={formData.discount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              name="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Optional description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <Button type="submit">Add Coupon</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
