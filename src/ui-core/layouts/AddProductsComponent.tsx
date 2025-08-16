// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

// export function AddProductComponent() {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//     imageUrl: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Product submitted:", formData);
//     // API call logic here
//   };

//   return (
//     <Card className="w-full mt-8">
//       <CardHeader>
//         <CardTitle>Add New Product</CardTitle>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="grid gap-6">
//           <div className="grid gap-2">
//             <Label htmlFor="name">Product Name</Label>
//             <Input
//               id="name"
//               name="name"
//               placeholder="Enter product name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="price">Price</Label>
//             <Input
//               id="price"
//               name="price"
//               type="number"
//               placeholder="Enter price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="category">Category</Label>
//             <Input
//               id="category"
//               name="category"
//               placeholder="e.g. Electronics, Grocery"
//               value={formData.category}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="imageUrl">Image URL</Label>
//             <Input
//               id="imageUrl"
//               name="imageUrl"
//               placeholder="https://example.com/image.jpg"
//               value={formData.imageUrl}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="description">Description</Label>
//             <Textarea
//               id="description"
//               name="description"
//               placeholder="Brief description about the product"
//               rows={4}
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </div>
//         </CardContent>

//         <CardFooter className="justify-end">
//           <Button type="submit">Add Product</Button>
//         </CardFooter>
//       </form>
//     </Card>
//   );
// }

"use client";

import { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
  imageUrl: Yup.string().url("Must be a valid URL").required("Image URL is required"),
  ingredients: Yup.string().required("Ingredients are required"),
  medicalValues: Yup.string().required("Medical values are required"),
  rating: Yup.number().min(0).max(5).required("Rating is required"),
  category: Yup.string().required("Category is required"),
  packs: Yup.array()
    .of(
      Yup.object().shape({
        size: Yup.number().required("Size is required"),
        price: Yup.number().required("Price is required"),
      })
    )
    .min(1, "At least one pack is required"),
});

export function AddProductComponent() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    description: "",
    imageUrl: "",
    ingredients: "",
    medicalValues: "",
    rating: 0,
    category: "",
    packs: [{ size: 0, price: 0 }],
  };

  const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    try {
      setLoading(true);
      const payload = {
        name: values.name,
        description: values.description,
        image: [values.imageUrl],
        sold: 0,
        ingredients: values.ingredients,
        medicalValues: values.medicalValues,
        rating: values.rating,
        category: values.category,
        packs: values.packs,
      };

      const res = await axios.post("http://localhost:3000/api/v1/products", payload);

      console.log("Product added:", res.data);
      resetForm();
      alert("Product added successfully!");
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className="space-y-6">
              {[
                { label: "Product Name", name: "name" },
                { label: "Image URL", name: "imageUrl" },
                { label: "Ingredients", name: "ingredients" },
                { label: "Medical Values", name: "medicalValues" },
                { label: "Rating", name: "rating", type: "number" },
                { label: "Category", name: "category" },
              ].map(({ label, name, type = "text" }) => (
                <div key={name} className="grid gap-2">
                  <Label htmlFor={name}>{label}</Label>
                  <Field as={Input} id={name} name={name} type={type} />
                  <div className="text-red-500 text-sm">
                    <ErrorMessage name={name} />
                  </div>
                </div>
              ))}

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Field as={Textarea} name="description" rows={4} />
                <div className="text-red-500 text-sm">
                  <ErrorMessage name="description" />
                </div>
              </div>

              <FieldArray name="packs">
                {({ push, remove }) => (
                  <div className="space-y-4">
                    <Label>Packs</Label>
                    {values.packs.map((_, index) => (
                      <div key={index} className="flex gap-4 items-center">
                        <div className="w-1/2">
                          <Field
                            as={Input}
                            name={`packs[${index}].size`}
                            placeholder="Size (e.g., 100)"
                            type="number"
                          />
                          <div className="text-red-500 text-sm">
                            <ErrorMessage name={`packs[${index}].size`} />
                          </div>
                        </div>
                        <div className="w-1/2">
                          <Field
                            as={Input}
                            name={`packs[${index}].price`}
                            placeholder="Price"
                            type="number"
                          />
                          <div className="text-red-500 text-sm">
                            <ErrorMessage name={`packs[${index}].price`} />
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => remove(index)}
                          className="ml-2"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      onClick={() => push({ size: 0, price: 0 })}
                      className="mt-2"
                    >
                      Add Pack
                    </Button>
                  </div>
                )}
              </FieldArray>

              <CardFooter className="justify-end mt-4">
                <Button type="submit" disabled={loading}>
                  {loading ? "Adding..." : "Add Product"}
                </Button>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
