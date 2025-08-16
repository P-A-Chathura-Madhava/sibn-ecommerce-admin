"use client";

import { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Plus, Trash2 } from "lucide-react";
import { MdArrowDropDownCircle } from "react-icons/md";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({});

export function AddProducts() {
  const [categories, setCategories] = useState([
    { id: "1", name: "Book & Stationary" },
    { id: "2", name: "Electronics" },
    { id: "3", name: "Clothing" },
  ]);

  const [imagePreviews, setImagePreviews] = useState<string[]>([""]);

  const initialValues = {
    sellerId: "",
    name: "",
    description: "",
    price: "",
    stocks: "",
    discount: "",
    disPrice: "",
    category: "",
    variants: ["XL"],
    imageUrls: [""],
  };

  const handleSubmit = (values: any, { resetForm }: { resetForm: any }) => {
    console.log("Product submitted:", values);

    // Simulate API delay and success
    setTimeout(() => {
      toast.success("Product added successfully!")
      resetForm();
      setImagePreviews([""]);
    }, 1000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, setFieldValue: any) => {
    if (e.target.files && e.target.files[0]) {
      const newPreviews = [...imagePreviews];
      newPreviews[index] = URL.createObjectURL(e.target.files[0]);
      setImagePreviews(newPreviews);
      setFieldValue(`imageUrls[${index}]`, e.target.files[0]);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="">
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

          {/* Top Section */}
          <div className="grid grid-rows-2 mt-10 gap-10">
            <div className="flex gap-10">
              {/* General Information */}
              <div className="w-[647px] h-[342px] bg-[#F9F9F9] p-4">
                <p className="text-[#4C4C4C] font-[600] text-[20px]">General Information</p>

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
                    placeholder="A high-quality graphite pencil perfect for writing, sketching, and drawing. Smooth strokes, durable wood casing, and easy to sharpen—ideal for everyday use."
                    className="border-0 text-[12px] mt-2 w-[613px] h-[148px] pl-3 bg-[#E9E9E9] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Upload Image */}
              <div className="w-[425px] h-[342px] bg-[#F9F9F9] p-4">
                <p className="text-[#4C4C4C] font-[600] text-[20px] mb-2">Upload Images</p>
                <div className="flex gap-6">
                  {/* Main Upload */}
                  <div className="flex flex-col justify-center items-center w-[280px] h-[280px] bg-[#E9E9E9] rounded-md relative cursor-pointer">
                    {imagePreviews[0] ? (
                      <img src={imagePreviews[0]} className="w-full h-full object-cover rounded-md" />
                    ) : (
                      <div className="w-10 h-10 bg-[#579D59] rounded-full flex items-center justify-center text-white">
                        <Plus size={20} />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => handleImageChange(e, 0, setFieldValue)}
                    />
                    <p className="text-[14px] mt-2 text-[#4C4C4C] text-center">Upload Product Image Here</p>
                    <p className="text-[12px] text-[#B0B0B0]">jpg, png, svg, jpeg</p>
                  </div>

                  {/* Side Images */}
                  <div className="flex flex-col justify-between gap-4">
                    {imagePreviews.slice(1).map((src, idx) => (
                      <div key={idx} className="w-[80px] h-[80px] bg-[#E9E9E9] rounded-md relative cursor-pointer">
                        {src ? (
                          <img src={src} className="w-full h-full object-cover rounded-md" />
                        ) : (
                          <div className="w-8 h-8 bg-[#579D59] rounded-full flex items-center justify-center text-white">
                            <Plus size={18} />
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={(e) => handleImageChange(e, idx + 1, setFieldValue)}
                        />
                      </div>
                    ))}
                    {/* Add new side image */}
                    <div
                      className="w-[80px] h-[80px] bg-[#E9E9E9] rounded-md flex items-center justify-center cursor-pointer"
                      onClick={() => setImagePreviews((prev) => [...prev, ""])}
                    >
                      <Plus size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex gap-10">
              {/* Pricing and Stocks */}
              <div className="w-[647px] h-[233px] bg-[#F9F9F9] p-4">
                <p className="text-[#4C4C4C] font-[600] text-[20px]">Pricing and Stocks</p>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p>Base Pricing</p>
                    <Field as={Input} name="price" placeholder="$ 47.57" className="border-0 mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]" />
                  </div>
                  <div>
                    <p>Stocks</p>
                    <Field as={Input} name="stocks" placeholder="77" className="border-0 mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]" />
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p>Discount</p>
                    <Field as={Input} name="discount" placeholder="10%" className="border-0 mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]" />
                  </div>
                  <div>
                    <p>Discount Price</p>
                    <Field as={Input} name="disPrice" placeholder="$ 42.00" className="border-0 mt-2 w-[273px] h-[39px] pl-3 bg-[#E9E9E9]" />
                  </div>
                </div>
              </div>

              {/* Optional and Add Product */}
              <div className="p-6 bg-white rounded-md w-[425px] h-[233px]">
                <p className="text-[12px] font-[400] mb-2">Add Product variant (optional)</p>
                <FieldArray name="variants">
                  {({ push, remove }) => (
                    <div className="flex gap-2 mb-4">
                      {values.variants.map((v: string, i: number) => (
                        <Field key={i} as={Input} name={`variants[${i}]`} placeholder="XL" className="w-[54px] h-[39px]" />
                      ))}
                      <button type="button" onClick={() => push("")} className="bg-[#E9E9E9] w-[54px] h-[39px] rounded-md flex items-center justify-center">
                        <Plus size={10} />
                      </button>
                      {values.variants.length > 1 && (
                        <button type="button" onClick={() => remove(values.variants.length - 1)} className="bg-red-500 w-[54px] h-[39px] flex items-center justify-center text-white rounded-[6px]">
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  )}
                </FieldArray>

                {/* Category */}
                <div className="mt-4">
                  <p className="text-[12px] font-[400] mb-2">Product Category</p>
                  <div className="relative w-full">
                    <Field as="select" name="category" className="appearance-none w-full bg-[#E9E9E9] px-4 py-2 pr-10 rounded-md text-sm">
                      <option value="" disabled>Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </Field>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <MdArrowDropDownCircle size={20} />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-4">
                  <button type="submit" className="bg-[#338636] text-white w-[112px] h-[35px] rounded-[37px] flex items-center gap-2 justify-center">
                    <Check size={16} /> Add Product
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
