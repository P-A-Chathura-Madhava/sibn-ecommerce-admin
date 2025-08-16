"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProductContext } from "@/context/ProductContext";
import { FaCheck } from "react-icons/fa6";
import { Trash2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
}

interface EditCategoryProps {
  category: Category;
  onSubmit: (data: Category) => void;
}

export function EditCategoryComponent({ category, onSubmit }: EditCategoryProps) {
  const { updateCategory, deleteCategory } = useProductContext();

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        slug: category.slug,
        description: category.description,
        imageUrl: category.imageUrl,
      });
    }
  }, [category]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async () => {
    try {
      await deleteCategory(category.id);
      alert("Category deleted successfully!");
    } catch (error) {
      alert("Failed to delete category.");
    }
  };

  return (
    <div className="w-full mt-8">
      <form
  onSubmit={(e) => {
    e.preventDefault();
    onSubmit({ ...category, ...formData }); // you can merge ID with updated data
  }}
>

        <div className="bg-[#F9F9F9] w-[1100px] p-4 rounded-md">
          <div className="flex gap-10">
            <div className="w-[623px]">
              <p className="text-[#4C4C4C] font-[600] text-[20px]">
                Edit Category
              </p>
              {/* Category Name */}
              <div className="mt-4">
                <p className="text-[15px] font-[400]">Category Name</p>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Category name"
                  className="border-0 text-[12px] mt-2 w-full h-[39px] pl-3 bg-[#E9E9E9] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Description */}
              <div className="mt-4">
                <p className="text-[15px] font-[400]">Category Description</p>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter category description here..."
                  className="border-0 text-[12px] mt-2 w-full h-[148px] pl-3 bg-[#E9E9E9] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Slug */}
              <div className="mt-4">
                <p className="text-[15px] font-[400]">Slug</p>
                <Input
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="Slug"
                  className="border-0 text-[12px] mt-2 w-full h-[39px] pl-3 bg-[#E9E9E9] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* Image */}
            <div className="w-[425px] h-[400px] ml-24">
              <p className="text-[#4C4C4C] mb-5 font-[600] text-[20px]">
                Edit Category Image
              </p>
              <label
                htmlFor="image"
                className="flex flex-col justify-center items-center w-[365px] h-[343px] bg-[#E9E9E9] rounded-md relative cursor-pointer"
              >
                <img
                  src={formData.imageUrl}
                  alt="Category"
                  className="w-[120px] h-[120px] object-cover rounded-md mb-4"
                />
                <div className="w-10 h-10 bg-[#579D59] rounded-full flex items-center justify-center text-white">
                  +
                </div>
                <p className="text-[14px] mt-2 text-[#4C4C4C] text-center">
                  Upload Category Image Here
                </p>
                <p className="text-[12px] text-[#B0B0B0]">jpg, png, svg, jpeg</p>

                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setFormData((prev) => ({
                          ...prev,
                          imageUrl: reader.result as string,
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-2 justify-end">
            <Button
              type="button"
              onClick={handleDelete}
              className="border border-[#FF0000] rounded-[37px] h-[40px] bg-white text-[#FF0000]"
            >
              <div className="flex items-center justify-center gap-2">
                <Trash2 size={14} />
                Delete
              </div>
            </Button>
            <Button
              type="submit"
              className="bg-[#579D59] h-[40px] rounded-[37px] text-white"
            >
              <div className="flex items-center justify-center gap-2">
                <FaCheck /> Save Changes
              </div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
