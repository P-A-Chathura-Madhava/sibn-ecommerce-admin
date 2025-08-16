"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaCheck } from "react-icons/fa6";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export function AddCategory() {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    imageUrl: "", // ✅ Start empty
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Category submitted:", formData);

    setTimeout(() => {
      toast.success("Category added successfully!");
      // Reset form
      setFormData({
        name: "",
        slug: "",
        description: "",
        imageUrl: "", // ✅ reset to empty
      });
    }, 500);
  };

  return (
    <div className="w-full mt-8">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F9F9F9] w-[1100px] p-4 rounded-md">
          <div className="flex gap-10">
            <div className="w-[623px]">
              <p className="text-[#4C4C4C] font-[600] text-[20px]">
                General Information
              </p>

              <div className="mt-4">
                <p className="text-[15px] font-[400]">Category Name</p>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Category name"
                  className="border-0 text-[12px] mt-2 w-full h-[39px] pl-3 bg-[#E9E9E9]"
                />
              </div>

              <div className="mt-4">
                <p className="text-[15px] font-[400]">Category Description</p>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter category description here..."
                  className="border-0 text-[12px] mt-2 w-full h-[148px] pl-3 bg-[#E9E9E9]"
                />
              </div>

              <div className="mt-4">
                <p className="text-[15px] font-[400]">Slug</p>
                <Input
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="Slug"
                  className="border-0 text-[12px] mt-2 w-full h-[39px] pl-3 bg-[#E9E9E9]"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="w-[425px] h-[400px] ml-24">
              <p className="text-[#4C4C4C] mb-5 font-[600] text-[20px]">
                Upload Category Image
              </p>
              <label
                htmlFor="image"
                className="flex flex-col justify-center items-center w-[365px] h-[343px] bg-[#E9E9E9] rounded-md relative cursor-pointer"
              >
                {formData.imageUrl ? (
                  <img
                    src={formData.imageUrl}
                    alt="Category"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="w-10 h-10 bg-[#579D59] rounded-full flex items-center justify-center text-white">
                    +
                  </div>
                )}
                <p className="text-[14px] mt-2 text-[#4C4C4C] text-center">
                  Upload Category Image Here
                </p>
                <p className="text-[12px] text-[#B0B0B0]">
                  jpg, png, svg, jpeg
                </p>

                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFormData((prev) => ({
                        ...prev,
                        imageUrl: URL.createObjectURL(file),
                      }));
                    }
                  }}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-2 justify-end">
            <Button
              type="button"
              className="border border-[#FF0000] rounded-[37px] h-[40px] bg-white text-[#FF0000]"
              onClick={() =>
                setFormData({
                  name: "",
                  slug: "",
                  description: "",
                  imageUrl: "", // reset empty
                })
              }
            >
              <div className="flex items-center justify-center gap-2">
                <Trash2 size={14} />
                Remove
              </div>
            </Button>
            <Button
              type="submit"
              className="bg-[#579D59] h-[40px] rounded-[37px] text-white"
            >
              <div className="flex items-center justify-center gap-2">
                <FaCheck /> Add Category
              </div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
