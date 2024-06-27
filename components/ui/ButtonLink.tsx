import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { href, children } = props;
  const baseClassName =
    "text-center text-white border-none rounded-md px-3 py-2 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark duration-300 disabledInput";

  return (
    <Link href={href} className={baseClassName}>
      {children}
    </Link>
  );
};

export default ButtonLink;
