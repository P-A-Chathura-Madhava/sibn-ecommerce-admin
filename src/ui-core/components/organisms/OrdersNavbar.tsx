"use client";
import { useState } from "react";
import { CalendarIcon, Search } from "lucide-react";
import { RiArrowUpDownFill } from "react-icons/ri";

// types for filter button
const filterOptions = ["All", "Paid", "Unpaid"] as const;
type FilterOption = (typeof filterOptions)[number];

export function OrdersNavBar() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selected, setSelected] = useState<FilterOption>("All");

  //   filter fuction
  const cycleFilter = () => {
    const currentIndex = filterOptions.indexOf(selected);
    const nextIndex = (currentIndex + 1) % filterOptions.length;
    setSelected(filterOptions[nextIndex]);
  };

  return (
    <div className="flex gap-2">
      {/* Order ID */}
      <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[200px] h-[35px]">
        <div className="bg-[#CACACA] w-[100px] pl-1 rounded-[9px] flex items-center text-[13px] font-[400] rounded-l-[9px]">
          Order ID
        </div>
        {/* Order ID Input */}
        <input
          type="text"
          placeholder="Ex. ORD001"
          className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
        />
      </div>
      {/* Seller ID */}
      <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[200px] h-[35px]">
        <div className="bg-[#CACACA] w-[100px] pl-1 rounded-[9px] flex items-center text-[13px] font-[400] rounded-l-[9px]">
          Seller ID
        </div>
        {/* Seller ID input */}
        <input
          type="text"
          placeholder="Ex. John Doe"
          className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
        />
      </div>
      {/* Customer ID*/}
      <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[250px] h-[35px]">
        <div className="bg-[#CACACA] w-[150px] pl-1 rounded-[9px] flex items-center text-[13px] font-[400] rounded-l-[9px]">
          Customer ID
        </div>
        {/* Customer ID Input*/}
        <input
          type="text"
          placeholder="Ex. Samn2001"
          className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
        />
      </div>

      {/* Date */}
      <div className="flex border border-gray-300 rounded-[9px] overflow-hidden h-[35px]">
        <div className="bg-[#CACACA] w-[80px] pl-1 rounded-[9px] flex items-center text-[13px] font-[400] rounded-l-[9px]">
          Order Date
        </div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-[120px] ml-2 mr-2  rounded  text-sm uppercase"
        />
      </div>

      {/* Price sort */}
      <button
        onClick={cycleFilter}
        className="w-[100px] rounded border bg-[#CACACA] px-2 py-1 text-sm uppercase hover:bg-gray-300"
      >
        {selected}
      </button>

      {/* Sort Icon Button */}
      <button className="w-[39px] h-[39px] bg-[#CACACA] rounded-[9px] flex items-center justify-center text-gray-700 text-xl">
        <RiArrowUpDownFill />
      </button>
    </div>
  );
}
