"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { IoTrashBin } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

interface Coupon {
  id: string;
  code: string;
  discount: number;
  expiryDate: string;
  description: string;
}

interface EditCouponProps {
  coupon: Coupon;
  onSubmit: (data: Coupon) => void;
  onDelete: (id: string) => void;
}

export default function EditCouponComponent({
  coupon,
  onSubmit,
  onDelete,
}: EditCouponProps) {
  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    expiryDate: "",
    description: "",
  });

  useEffect(() => {
    if (coupon) {
      setFormData({
        code: coupon.code,
        discount: coupon.discount.toString(),
        expiryDate: coupon.expiryDate,
        description: coupon.description,
      });
    }
  }, [coupon]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    // Call the parent `onSubmit` handler with coupon data
    onSubmit({
      id: coupon.id,
      code: formData.code,
      discount: Number(formData.discount),
      expiryDate: formData.expiryDate,
      description: formData.description,
    });
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this coupon?")) {
      onDelete(coupon.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#F9F9F9] p-6">
      <h2 className="text-[20px] font-[600] text-[#4C4C4C]">
        Edit Coupon Information
      </h2>

      {/* Coupon Code + Discount */}
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[15px] font-[400] text-black mb-1">
            Coupon Code
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
            placeholder="Enter the discount"
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
          placeholder="Description about the coupon..."
          className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm outline-none h-[148px]"
        />
      </div>

      {/* Expiry Date + Customer ID */}
      <div className="flex mt-5 items-center justify-between gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="YYYY-MM-DDTHH:mm:ss.sssZ"
            className="rounded-md border w-[318px] border-gray-300 bg-gray-100 px-3 py-2 pr-10 text-sm outline-none"
          />
          <CalendarIcon className="absolute right-3 top-9 w-4 h-4 text-gray-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Coupon ID
          </label>
          <input
            type="text"
            value={coupon.id}
            disabled
            className="rounded-md border w-[318px] border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex mt-4 gap-4">
          <button
            type="button"
            onClick={handleDelete}
            className="inline-flex gap-2 text-[13px] items-center rounded-[37px] w-[150px] justify-center h-[50px] border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            <IoTrashBin /> Delete
          </button>
          <button
            type="submit"
            className="inline-flex items-center text-[13px] rounded-[37px] w-[170px] gap-2 h-[50px] justify-center bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
          >
            <FaCheck /> Update Coupon
          </button>
        </div>
      </div>
    </form>
  );
}
