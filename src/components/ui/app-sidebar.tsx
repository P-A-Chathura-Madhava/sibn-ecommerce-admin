// "use client";

// import { useState } from "react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// /* Icons */
// import { MdDashboard } from "react-icons/md";
// import { CiGift } from "react-icons/ci";
// import { CiViewList } from "react-icons/ci";
// import { FaUsers } from "react-icons/fa";
// import { RiCoupon2Line } from "react-icons/ri";

// // Menu items.
// const items = [
//   {
//     title: "Dashboard",
//     url: "#",
//     icon: MdDashboard,
//   },
//   {
//     title: "Products",
//     icon: CiGift,
//     children: [
//       { title: "Add Product", url: "#add" },
//       { title: "Remove Product", url: "#remove" },
//     ],
//   },
//   {
//     title: "Orders",
//     url: "#",
//     icon: CiViewList,
//   },
//   {
//     title: "Customers",
//     url: "#",
//     icon: FaUsers,
//   },
//   {
//     title: "Coupons",
//     url: "#",
//     icon: RiCoupon2Line,
//   },
// ];

// export function AppSidebar() {
//   const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

//   const toggleMenu = (title: string) => {
//     setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   return (
//     <Sidebar className="mt-[80px]">
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => {
//                 const Icon = item.icon;
//                 const hasChildren = !!item.children;
//                 const isOpen = openMenus[item.title];

//                 return (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton
//                       asChild={!hasChildren}
//                       onClick={() => hasChildren && toggleMenu(item.title)}
//                       className=""
//                     >
//                       {hasChildren ? (
//                         <div className="flex items-center gap-2">
//                           {Icon && <Icon />}
//                           <span>{item.title}</span>
//                         </div>
//                       ) : (
//                         <a href={item.url!} className="flex items-center gap-2">
//                           {Icon && <Icon />}
//                           <span>{item.title}</span>
//                         </a>
//                       )}
//                     </SidebarMenuButton>

//                     {/* Render children if exists and open */}
//                     {hasChildren && isOpen && (
//                       <div className="ml-8 space-y-1">
//                         {item.children.map((child) => (
//                           <a
//                             key={child.title}
//                             href={child.url}
//                             className="block text-sm text-muted-foreground hover:text-foreground transition"
//                           >
//                             {child.title}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// /* Icons */
// import { MdDashboard } from "react-icons/md";
// import { CiGift, CiViewList } from "react-icons/ci";
// import { FaUsers } from "react-icons/fa";
// import { RiCoupon2Line } from "react-icons/ri";
// import { ChevronRight } from "lucide-react";

// // Menu items.
// const items = [
//   {
//     title: "Dashboard",
//     url: "#",
//     icon: MdDashboard,
//   },
//   {
//     title: "Products",
//     icon: CiGift,
//     children: [
//       { title: "Add Product", url: "#add" },
//       { title: "Remove Product", url: "#remove" },
//     ],
//   },
//   {
//     title: "Orders",
//     url: "#",
//     icon: CiViewList,
//   },
//   {
//     title: "Customers",
//     url: "#",
//     icon: FaUsers,
//   },
//   {
//     title: "Coupons",
//     url: "#",
//     icon: RiCoupon2Line,
//   },
// ];

// export function AppSidebar() {
//   const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

//   const toggleMenu = (title: string) => {
//     setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   return (
//     <Sidebar className="mt-[80px]">
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => {
//                 const Icon = item.icon;
//                 const hasChildren = !!item.children;
//                 const isOpen = openMenus[item.title];

//                 return (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton
//                       asChild={!hasChildren}
//                       onClick={() => hasChildren && toggleMenu(item.title)}
//                       className="w-full flex justify-between items-center"
//                     >
//                       <div className="flex items-center gap-2 w-full">
//                         {Icon && <Icon />}
//                         <span className="flex-1">{item.title}</span>

//                         {hasChildren && (
//                           <motion.div
//                             animate={{ rotate: isOpen ? 90 : 0 }}
//                             transition={{ duration: 0.2 }}
//                           >
//                             <ChevronRight className="w-4 h-4" />
//                           </motion.div>
//                         )}
//                       </div>
//                     </SidebarMenuButton>

//                     {hasChildren && isOpen && (
//                       <div className="ml-8 mt-2 space-y-1">
//                         {item.children.map((child) => (
//                           <a
//                             key={child.title}
//                             href={child.url}
//                             className="block text-sm text-muted-foreground hover:text-foreground transition"
//                           >
//                             {child.title}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { MdOutlineDashboard } from "react-icons/md";
import { CiGift, CiViewList } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";
import { ChevronRight } from "lucide-react";
import { IoIosAddCircle } from "react-icons/io";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";

import Image from "next/image";
import logo from "/public/logos/logo.png";



const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: MdOutlineDashboard,
  },
  {
    title: "Products",
    icon: CiGift,
    children: [
      { icon: IoIosAddCircle, title: "Add", url: "/add-product" },
      { icon: FaShoppingCart, title: "All Products", url: "/all-products" },
    ],
  },
  {
    title: "Categories",
    icon: MdCategory,
    children: [
      { icon: IoIosAddCircle, title: "Add", url: "/add-category" },
      { icon: FaShoppingCart, title: "All Categories", url: "/all-categories" },
    ],
  },
  // {
  //   title: "Colors",
  //   icon: IoIosColorPalette,
  //   children: [
  //     { icon: IoIosAddCircle, title: "Add", url: "/add-color" },
  //     { icon: FaShoppingCart, title: "All Colors", url: "/all-colors" },
  //   ],
  // },
  {
    title: "Orders",
    url: "/all-orders",
    icon: CiViewList,
  },
  {
    title: "Customers",
    url: "/all-customers",
    icon: FaUsers,
  },
  {
    title: "Users",
    url: "/all-users",
    icon: FaUsers,
  },
  {
    title: "Coupons",
    // url: "#",
    icon: RiCoupon2Line,
    children: [
      { icon: IoIosAddCircle, title: "Add", url: "/add-coupon" },
      { icon: IoRemoveCircleSharp, title: "All Coupons", url: "/all-coupons" },
    ],
  },
];

export function AppSidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

const toggleMenu = (title: string) => {
  setOpenMenus((prev) => {
    const isCurrentlyOpen = prev[title];
    // Close all other menus and toggle only this one
    return isCurrentlyOpen ? {} : { [title]: true };
  });
};


  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="h-[118px] flex items-center">
            <Image src={logo} alt="Logo" width={76} height={47} className="object-cover" />
            <div>
              <p className="font-[700] text-[20px] text-black">SIBN</p>
              <p className="font-[400] text-[13px] text-black">Admin Dashboard</p>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;
                const hasChildren = !!item.children;
                const isOpen = openMenus[item.title];

                return (
                  <SidebarMenuItem key={item.title} className={isOpen ? "bg-[#D7FFD1] rounded" : ""}>
                    {/* <SidebarMenuButton
                      asChild={!hasChildren}
                      onClick={() => hasChildren && toggleMenu(item.title)} 
                      className="w-full flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2 w-full">
                        {Icon && <Icon />}
                        <span className="flex-1">{item.title}</span>

                        {hasChildren && (
                          <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        )}
                      </div>
                    </SidebarMenuButton> */}
                    <SidebarMenuButton
                      asChild={!hasChildren}
                      onClick={() => hasChildren && toggleMenu(item.title)}
                      className="w-full flex  hover:bg-[#D7FFD1] justify-between items-center"
                    >
                      {hasChildren ? (
                        <div className="flex items-center gap-2 w-full">
                          {Icon && <Icon size={22}/>}
                          <span className="flex-1 text-black text-[16px] font-[400]">{item.title}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      ) : (
                        <a
                          href={item.url}
                          className="flex items-center gap-2 w-full cursor-pointer"
                        >
                          {Icon && <Icon size={22}/>}
                          <span className="flex-1 text-black text-[16px] font-[400]">{item.title}</span>
                        </a>
                      )}
                    </SidebarMenuButton>

                    {/* Submenu with animation */}
                    {/* <AnimatePresence initial={false}>
                      {hasChildren && isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden ml-8 mt-2 space-y-1"
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.title}
                              href={child.url}
                              className="block text-sm text-muted-foreground hover:text-foreground transition"
                            >
                              {child.title}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence> */}
                    <AnimatePresence initial={false}>
                      {hasChildren && isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden ml-8 pb-2 mt-2 space-y-1"
                        >
                          {item.children.map((child) => {
                            const ChildIcon = child.icon;
                            return (
                              <a
                                key={child.title}
                                href={child.url}
                                className="flex items-center hover:text-[#45BC49] text-[#044106] gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                              >
                                {ChildIcon && <ChildIcon size={22} className="w-4 h-4" />}
                                {child.title}
                              </a>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
