import React from "react";
import { BsList } from "react-icons/bs";

type IProps = {
  onToggle: () => void;
};

const MobileSidebarToggler = (props: IProps) => {
  const { onToggle } = props;

  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="focus:outline-none border-white border-2 p-1 rounded-lg bg-gray-100 text-gray-800"
      >
        <BsList className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MobileSidebarToggler;
