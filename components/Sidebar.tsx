"use client";
import { useState } from "react";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import Navigation from "./Navigation";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`shrink-0 bg-gray-800 text-white ${
        isCollapsed ? "w-16" : "w-64"
      } transition-width duration-300 order-last`}
    >
      <div className="flex flex-col items-center p-4 space-y-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="focus:outline-none mr-auto border-white border-2 p-2 rounded-lg bg-gray-100 text-gray-800"
        >
          {isCollapsed ? <BsArrowsAngleExpand /> : <BsArrowsAngleContract />}
        </button>
        <Navigation isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
