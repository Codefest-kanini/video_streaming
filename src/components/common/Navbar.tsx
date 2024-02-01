"use client";

import React from "react";
import Image from "next/image";
import Avatar from '@/assets/logo_large.svg'
import { FaRegShareFromSquare } from "react-icons/fa6";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join this Meeting',
        url: window.location.href
      }).then(() => {
        console.log('Shared successfully!');
      })
      .catch(console.error);
    } else {
      // fallback for browsers that do not support navigator.share
      console.log('Web Share API is not supported in your browser');
    }
  }

  return (
    <header className="border-b border-custom-1 w-full absolute top-0 left-0 h-16 flex items-center px-10 z-10 text-slate-100 justify-between">
      <Image
        src={Avatar}
        alt="logo"
        width={180}
        height={180}
        className="object-contain"
        quality={100}
        priority
      />
      <button onClick={() => handleShare()} className="flex flex-row items-center justify-between gap-4 bg-[#090909] border p-2 rounded-md hover:bg-[#27229F] border-white text-white transition-all ease-in-out duration-200 ">
        Share Meet <FaRegShareFromSquare />
      </button>
    </header>
  );
};
export default Navbar;
