"use client";
import { Button } from "@mui/material";
import Navigation from "./Navigation";
import { RiLogoutBoxLine } from "react-icons/ri";
import { signOutService } from "@/services/authServices";

const Sidebar = () => {
  return (
    <div className="p-4 h-full bg-primary text-white flex flex-col">
      <Navigation />

      <button
        className="bg-gray-200 hover:bg-gray-300 text-black w-full mt-auto flex justify-center items-center p-3 rounded-md"
        onClick={signOutService}
      >
        <span className="ml-2">تسجيل الخروج</span>
        <RiLogoutBoxLine />
      </button>
    </div>
  );
};

export default Sidebar;
