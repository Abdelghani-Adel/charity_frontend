import React from "react";
import Sidebar from "./Sidebar";

const DesktopSidebar = () => {
  return (
    <div className="hidden md:block w-64">
      <Sidebar />
    </div>
  );
};

export default DesktopSidebar;
