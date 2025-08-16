"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { IoTrashBin } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function AddCoupon() {
  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    expiryDate: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy behavior: log data and show success message
    console.log("Coupon submitted:", formData);
    setTimeout(() => {
      toast.success("Coupon added successfully!");
      setFormData({
        code: "",
        discount: "",
        expiryDate: "",
        description: "",
      });
    }, 300);
  };

  const handleRemove = () => {
    setFormData({
      code: "",
      discount: "",
      expiryDate: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#F9F9F9] p-6">
      <h2 className="text-[20px] font-[600] text-[#4C4C4C]">
        General Information
      </h2>

      {/* Coupon Code + Discount */}
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[15px] font-[400] text-black mb-1">
            ADD Coupon code
          </label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Enter the code"
            className="w-full rounded-md h-[39px] border border-gray-300 bg-gray-100 px-3 py-2 text-sm outline-none"
          />
        </div>

        <div>
          <label className="block text-[15px] font-[400] text-black mb-1">
            Discount (%)
          </label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="Enter discount"
            className="w-full rounded-md h-[39px] border border-gray-300 bg-gray-100 px-3 py-2 text-sm outline-none"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mt-5 text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Ex: A high-quality graphite pencil perfect for writing, sketching, and drawing..."
          className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm outline-none h-[148px]"
        />
      </div>

      {/* Expiry Date + Customer ID */}
      <div className="flex mt-5 items-center justify-between gap-4 flex-wrap">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="DD/MM/YY"
            className="rounded-md border w-[318px] border-gray-300 bg-gray-100 px-3 py-2 pr-10 text-sm outline-none"
          />
          <CalendarIcon className="absolute right-3 top-9 w-4 h-4 text-gray-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Customer ID
          </label>
          <input
            type="text"
            value="CAT1224"
            disabled
            className="rounded-md border w-[318px] border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mt-5 gap-4">
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex gap-2 items-center rounded-[37px] w-[150px] justify-center h-[50px] border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
        >
          <IoTrashBin /> Remove
        </button>
        <button
          type="submit"
          className="inline-flex items-center rounded-[37px] w-[170px] gap-2 h-[50px] justify-center bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
        >
          <FaCheck /> Add Coupon
        </button>
      </div>
    </form>
  );
}
