"use client";
import { Button } from "@mui/material";
import Navigation from "./Navigation";
import { RiLogoutBoxLine } from "react-icons/ri";
import { signOutService } from "@/services/authServices";

const Sidebar = () => {
  return (
    <div className="p-4 h-full bg-primary text-white flex flex-col">
      <Navigation />

      <Button
        className="border-2 bg-gray-200 hover:bg-gray-300 text-black w-full mt-auto"
        onClick={signOutService}
      >
        <span className="ml-2">تسجيل الخروج</span>
        <RiLogoutBoxLine />
      </Button>
    </div>
  );
};

export default Sidebar;
