// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

// export function AddColorComponent() {
//   const [formData, setFormData] = useState({
//     name: "",
//     hexCode: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Color submitted:", formData);
//     // API call logic here
//   };

//   return (
//     <Card className="w-full mt-8">
//       <CardHeader>
//         <CardTitle>Add New Color</CardTitle>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="grid gap-6">
//           <div className="grid gap-2">
//             <Label htmlFor="name">Color Name</Label>
//             <Input
//               id="name"
//               name="name"
//               placeholder="Enter color name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="hexCode">Hex Code</Label>
//             <Input
//               id="hexCode"
//               name="hexCode"
//               placeholder="#FFFFFF"
//               value={formData.hexCode}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </CardContent>

//         <CardFooter className="justify-end">
//           <Button type="submit">Add Color</Button>
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
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useProductContext } from "@/context/ProductContext"; // Make sure path is correct

export function AddColorComponent() {
  const { createColor } = useProductContext();

  const [formData, setFormData] = useState({
    name: "",
    hexCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createColor(formData);
      alert("Color created successfully!");
      setFormData({ name: "", hexCode: "" });
    } catch (error) {
      alert("Failed to create color.");
    }
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Add New Color</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Color Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter color name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="hexCode">Hex Code</Label>
            <Input
              id="hexCode"
              name="hexCode"
              placeholder="#FFFFFF"
              value={formData.hexCode}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <Button type="submit">Add Color</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
