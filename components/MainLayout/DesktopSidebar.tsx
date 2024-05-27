import React from "react";
import Sidebar from "./Sidebar";

const DesktopSidebar = () => {
  return (
    <div className="hidden md:block w-64 flex-shrink-0">
      <Sidebar />
    </div>
  );
};

export default DesktopSidebar;
