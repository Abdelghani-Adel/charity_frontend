"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import MobileSidebarToggler from "./MobileSidebarToggler";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full p-3 flex justify-between align-middle h-[8vh] text-white bg-primary">
      <MobileSidebarToggler onToggle={toggleSidebar} />

      <Link href="/" className="relative w-[130px] h-[40px] mr-auto">
        <Image src="/images/new-logo.png" fill alt="logo" />
      </Link>

      <MobileSidebar isCollapsed={isCollapsed} />
    </div>
  );
};

export default Header;
