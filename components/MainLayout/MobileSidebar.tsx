import React from "react";
import Sidebar from "./Sidebar";

type IProps = {
  isCollapsed: boolean;
};

const MobileSidebar = (props: IProps) => {
  const { isCollapsed } = props;
  return (
    <div
      className={`md:hidden transition-all duration-500 fixed top-14 w-2/3 h-screen ${
        isCollapsed ? "-right-full" : "right-0"
      }`}
    >
      <Sidebar />
    </div>
  );
};

export default MobileSidebar;
