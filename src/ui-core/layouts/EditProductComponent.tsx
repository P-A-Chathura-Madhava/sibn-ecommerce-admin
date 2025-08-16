// "use client";

// import { useState, useEffect } from "react";
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

// // Define a type for product form data
// type ProductFormData = {
//   name: string;
//   price: string;
//   category: string;
//   description: string;
//   imageUrl: string;
// };

// interface EditProductProps {
//   initialData: ProductFormData;
//   onSubmit: (data: ProductFormData) => void;
// }

// export function EditProductComponent({
//   initialData,
//   onSubmit,
// }: EditProductProps) {
//   const [formData, setFormData] = useState<ProductFormData>(initialData);

//   useEffect(() => {
//     setFormData(initialData);
//   }, [initialData]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Updated product data:", formData);
//     onSubmit(formData);
//   };

//   return (
//     <Card className="w-full mt-8">
//       <CardHeader>
//         <CardTitle>Edit Product</CardTitle>
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
//           <Button type="submit">Update Product</Button>
//         </CardFooter>
//       </form>
//     </Card>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Plus, Trash2 } from "lucide-react";
import { MdArrowDropDownCircle } from "react-icons/md";
import { useProductContext } from "@/context/ProductContext";

const validationSchema = Yup.object().shape({});

export function EditProductComponent({
  product,
  onSubmit,
}: {
  product: any;
  onSubmit: (values: any) => void;
}) {
  console.log(product);

  const [loading, setLoading] = useState(false);
  const { updateProduct } = useProductContext();

  const initialValues = {
    sellerId: product?.sellerId || "",
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || 0,
    stocks: product?.stocks || "",
    discount: product?.discount || "",
    disPrice: product?.disPrice || "",
    category: product?.category || "Book & Stationary",
    // variants: product?.variants || ["XL"],
    variants: product?.variants?.map((v: any) => v.name) || ["XL"], // 👈 fix here
    newVariant: "",
    imageUrls: product?.imageUrls || [""],
  };

  return (
<Formik
  enableReinitialize
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={onSubmit} // ✅ use passed-in submit handler
>

      {({ values }) => (
        <Form>
          {/* Seller ID */}
          <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[200px]">
            <div className="bg-[#CACACA] pl-2 w-[100px] rounded-[9px] text-[13px] font-[400] flex items-center">
              Seller ID
            </div>
            <Field
              as={Input}
              name="sellerId"
              placeholder="Ex. #samn2001"
              className="border-0 text-[12px] pl-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="grid grid-rows-2 mt-10">
            <div className="flex gap-10">
              {/* General Information */}
              <div className="w-[647px] h-[342px] bg-[#F9F9F9] p-4">
                <p className="text-[#4C4C4C] font-[600] text-[20px]">
                  General Information
                </p>

                <div className="mt-4">
                  <p className="text-[15px] font-[400]">Product Name</p>
                  <Field
                    as={Input}
                    name="name"
                    placeholder="Super pencil"
                    className="border-0 text-[12px] mt-2 w-[613px] h-[39px] pl-3 bg-[#E9E9E9] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-[15px] font-[400]">Product Description</p>
                  <Field
                    as={Textarea}
                    name="description"
                    placeholder="Description"
                    className="border-0 text-[12px] mt-2 w-[613px] h-[148px] pl-3 bg-[#E9E9E9] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Upload Image */}
              <div className="w-[425px] h-[342px] bg-[#F9F9F9] p-4">
                <p className="text-[#4C4C4C] font-[600] text-[20px] mb-2">
                  Upload Image
                </p>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center justify-center w-[280px] h-[280px] bg-[#E9E9E9] rounded-md">
                    <div className="w-10 h-10 bg-[#579D59] rounded-full flex items-center justify-center text-white">
                      <Plus size={20} />
                    </div>
                    <p className="text-[14px] mt-2 text-[#4C4C4C] text-center">
                      Upload Product Image Here
                    </p>
                    <p className="text-[12px] text-[#B0B0B0]">
                      jpg, png, svg, jpeg
                    </p>
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="w-[80px] h-[80px] bg-[#E9E9E9] rounded-md flex items-center justify-center cursor-pointer"
                      >
                        <div className="w-8 h-8 bg-[#579D59] rounded-full flex items-center justify-center text-white">
                          <Plus size={18} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex gap-10">
              <div>
                {/* Pricing and Stocks */}
                <div className="w-[647px] h-[233px] bg-[#F9F9F9] p-4">
                  <p className="text-[#4C4C4C] font-[600] text-[20px]">
                    Pricing and Stocks
                  </p>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <p className="text-[15px] font-[400]">Base Pricing</p>
                      <Field
                        as={Input}
                        name="price"
                        placeholder="$ 47.57"
                        className="border-0 text-[12px] mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-[400]">Stocks</p>
                      <Field
                        as={Input}
                        name="stocks"
                        placeholder="77"
                        className="border-0 text-[12px] mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <p className="text-[15px] font-[400]">Discount</p>
                      <Field
                        as={Input}
                        name="discount"
                        placeholder="10%"
                        className="border-0 text-[12px] mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-[400]">Discount Price</p>
                      <Field
                        as={Input}
                        name="disPrice"
                        placeholder="New Year Discount"
                        className="border-0 text-[12px] mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Variants and Category */}
              <div className="p-6 bg-white rounded-md w-[425px] h-[233px]">
                <div>
                  <p className="text-[12px] font-[400] mb-2">
                    Product Variants (optional)
                  </p>
                  <FieldArray name="variants">
                    {({ push, remove }) => (
                      <div className="flex">
                        {values.variants.map(
                          (variant: string, index: number) => (
                            <Field
                              key={index}
                              as={Input}
                              name={`variants[${index}]`}
                              className="w-[54px] h-[39px] text-[12px] mr-2"
                            />
                          )
                        )}

                        {values.variants.length > 0 && (
                          <button
                            type="button"
                            onClick={() => remove(values.variants.length - 1)}
                            className="w-[54px] h-[39px] flex flex-col bg-red-500 rounded-[6px] text-white items-center justify-center"
                          >
                            <Trash2 size={16} />
                            <p className="text-[7px]">Remove</p>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => push("")}
                          className="w-[54px] h-[39px] ml-2 bg-[#E9E9E9] rounded-md flex items-center justify-center"
                        >
                          <div className="w-[14px] h-[14px] bg-green-600 rounded-full flex items-center justify-center text-white">
                            <Plus size={10} />
                          </div>
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </div>

                <div className="mt-4">
                  <p className="text-[12px] font-[400] mb-2">
                    Product Category
                  </p>
                  <div className="relative w-full">
                    <Field
                      as="select"
                      name="category"
                      className="appearance-none w-full bg-[#E9E9E9] px-4 py-2 pr-10 rounded-md text-sm text-[#4C4C4C] focus:outline-none"
                    >
                      <option>Book & Stationary</option>
                      <option>Category 01</option>
                      <option>Category 02</option>
                    </Field>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <MdArrowDropDownCircle size={20} />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="submit"
                    className="bg-[#338636] text-white w-[112px] h-[35px] rounded-[37px] pl-2 text-[12px] flex items-center gap-2"
                  >
                    <Check size={16} />
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
