import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  disabled = false,
  children,
}) => {
  const baseClassName =
    "border-none rounded-md px-3 py-2 gap-2 inline-flex items-center justify-center bg-secondary hover:bg-primary-dark text-white duration-300 disabled:text-black disabled:bg-gray-300 disabled:cursor-not-allowed";

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClassName}>
      {children}
    </button>
  );
};

export default Button;
