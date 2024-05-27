"use client";
import { BsList } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import MobileSidebarToggler from "./MobileSidebarToggler";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full p-3 flex justify-between align-middle h-14 text-white bg-secondary-dark">
      <div className="logo">Logo</div>

      <MobileSidebarToggler onToggle={toggleSidebar} />
      <MobileSidebar isCollapsed={isCollapsed} />
    </div>
  );
};

export default Header;
