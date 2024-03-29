"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthModel from "../Auth/AuthModel";
import { useAuth } from "@/context/AuthContext";
const Navbar = () => {
  const { wallet } = useAuth();
  return (
    <nav className="grid grid-cols-3 justify-between place-items-center py-5 font-[Montserrat] ">
      <div className="flex items-center justify-center space-x-5">
        <Image
          src={"/logo.png"}
          priority
          width={100}
          height={100}
          className="w-12 h-12"
          alt="logo-image"
        />
      </div>
      <div className="flex flex-row justify-center items-center space-x-5">
        {wallet && (
          <>
            {" "}
            <Link
              href={"/"}
              className="font-medium active:text-blue-700 hover:text-blue-800"
            >
              Home
            </Link>
            <Link
              href={"/dashboard"}
              className="font-medium active:text-blue-700 hover:text-blue-800"
            >
              Dashboard
            </Link>
          </>
        )}
      </div>
      <div>
        <AuthModel />
      </div>
    </nav>
  );
};

export default Navbar;
