// "use client";

// import { useState } from "react";

// import { RiArrowUpDownFill } from "react-icons/ri";

// interface SubNavProps {
// }

// const SubNav: React.FC<SubNavProps> = ({}) => {
//   return (
//     <div className="flex items-center gap-4">
//       {/* Seller ID input */}
//       <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[200px] h-[35px]">
//         <div className="bg-[#CACACA] w-[100px] pl-1 rounded-[9px] flex items-center text-[13px] font-[400] rounded-l-[9px]">
//           Seller ID
//         </div>
//         <input
//           type="text"
//           placeholder="Ex. #samn2001"
//           className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
//         />
//       </div>

//       {/* Product ID input */}
//       <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[200px] h-[35px]">
//         <div className="bg-[#CACACA] w-[130px] pl-1 rounded-[9px] flex items-center text-[13px] font-[400]  rounded-l-[9px]">
//           Product ID
//         </div>
//         <input
//           type="text"
//           placeholder="Ex. Prd30"
//           className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
//         />
//       </div>

//       {/* Sort Icon Button */}
//       <button className="w-[39px] h-[39px] bg-[#CACACA] rounded-[9px] flex items-center justify-center text-gray-700 text-xl">
//         <RiArrowUpDownFill />
//       </button>
//     </div>
//   );
// };

// export default SubNav;

"use client";

import { useState } from "react";
import { RiArrowUpDownFill } from "react-icons/ri";

interface SubNavProps {
  onSellerChange: (sellerId: string) => void;
    onProductIdSearch: (productId: string) => void;
}

const SubNav: React.FC<SubNavProps> = ({ 
  onSellerChange,
    onProductIdSearch
 }) => {
  const [sellerId, setSellerId] = useState("");
    const [productId, setProductId] = useState("");

  const handleSellerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSellerChange(sellerId.trim());
    }
  };

  const handleProductIdKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onProductIdSearch(productId.trim());
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Seller ID input */}
      <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[200px] h-[35px]">
        <div className="bg-[#CACACA] w-[100px] pl-1 flex items-center text-[13px] font-[400] rounded-l-[9px]">
          Seller ID
        </div>
        <input
          type="text"
          placeholder="Ex. #samn2001"
          className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
          value={sellerId}
          onChange={(e) => setSellerId(e.target.value)}
          onKeyDown={handleSellerKeyDown}
        />
      </div>

      {/* Product ID input (not yet wired) */}
      <div className="flex border border-gray-300 rounded-[9px] overflow-hidden w-[200px] h-[35px]">
        <div className="bg-[#CACACA] w-[130px] pl-1 flex items-center text-[13px] font-[400] rounded-l-[9px]">
          Product ID
        </div>
        <input
          type="text"
          placeholder="Ex. Prd30"
          className="w-full px-3 text-sm border-0 outline-none focus:ring-0"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          onKeyDown={handleProductIdKeyDown}
        />
      </div>

      {/* Sort Icon Button */}
      <button className="w-[39px] h-[39px] bg-[#CACACA] rounded-[9px] flex items-center justify-center text-gray-700 text-xl">
        <RiArrowUpDownFill />
      </button>
    </div>
  );
};

export default SubNav;
