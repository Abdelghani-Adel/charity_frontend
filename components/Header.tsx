"use client";
import { BsList } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="w-full p-3 text-white bg-secondary-dark flex justify-between h-14">
        <div className="logo">Logo</div>

        <div className="md:hidden">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="focus:outline-none mr-auto border-white border-2 p-1 rounded-lg bg-gray-100 text-gray-800"
          >
            <BsList className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 fixed top-14 w-2/3 h-screen ${
          isCollapsed ? "-right-full" : "right-0"
        }`}
      >
        <Sidebar />
      </div>
    </>
  );
};

export default Header;
