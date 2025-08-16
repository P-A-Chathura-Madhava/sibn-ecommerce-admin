"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import TesboiusLogo from "/public/logos/tesbiousLogoImage.png";
import AvatarImage from "/public/navbarImages/avatarImage.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { UserButton, useUser } from "@clerk/nextjs";

function Navbar({ title }: { title: string }) {
  const { isSignedIn = false, user } = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const userRole = user?.publicMetadata?.role;

  return (
    <div className="bg-white h-[80px] flex items-center px-6 justify-between">
      <div className="flex gap-2 justify-center items-center">
        {/* Title */}
        <h1 className="text-[32px] text-[#403E3E] font-[600]">{title}</h1>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="pr-4">
          {/* <div className="rounded-full bg-slate-200 p-1 hover:bg-slate-400 cursor-pointer transition-all duration-300 relative">
            <span className="absolute bg-red-500 text-white rounded-full -top-1 -right-1 text-xs w-[16px] flex justify-center items-center">
              4
            </span>
            <IoMdNotificationsOutline className="text-3xl" />
          </div> */}
        </div>

        {/* <Image
          src={AvatarImage}
          alt="avatar image"
          height={36}
          width={36}
          className="rounded-full"
        /> */}
        <div className="ml-2">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "50px",
                  height: "50px",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
