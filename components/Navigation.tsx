import Link from "next/link";
import React, { useState } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoChevronDownOutline, IoHomeOutline } from "react-icons/io5";
import { LiaIdCard } from "react-icons/lia";
import { v4 } from "uuid";

type INavItem = {
  href: string;
  label: string;
  icon: React.FC;
  children: { href: string; label: string }[];
};

const navItems: INavItem[] = [
  {
    href: "/",
    label: "الصفحة الرئيسية",
    icon: IoHomeOutline,
    children: [],
  },
  {
    href: "/indigents",
    label: "الحالات",
    icon: LiaIdCard,
    children: [
      { href: "/indigents/add", label: "إضافة" },
      { href: "/indigents/edit", label: "طلب تعديل" },
      { href: "/indigents/inquery", label: "إستعلام" },
    ],
  },
  {
    href: "/aids",
    label: "المساعدات",
    icon: FaUsersLine,
    children: [{ href: "/profile/settings", label: "إضافة" }],
  },
  {
    href: "/reports",
    label: "التقارير",
    icon: HiOutlineDocumentReport,
    children: [{ href: "/reports/inquery", label: "إستعلام عن حالة" }],
  },
];

const Navigation = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <NavItem item={item} key={v4()} />
        ))}
      </ul>
    </nav>
  );
};

type INavitemProps = {
  item: INavItem;
};

const NavItem = (props: INavitemProps) => {
  const { item } = props;
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => setIsOpened(!isOpened);
  return (
    <li key={item.href} className="flex flex-col items-start">
      <div className="flex items-center w-full">
        {/* Main item */}
        <Link href={item.href} className="flex items-center w-full">
          <item.icon />
          <span className={`ml-2 transition-width duration-300 overflow-hidden w-auto `}>
            {item.label}
          </span>
        </Link>

        {/* Arrow */}
        {item.children.length > 0 && (
          <button onClick={toggle} className="focus:outline-none ml-2">
            <IoChevronDownOutline
              className={`h-4 w-4 transition-transform ${isOpened ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        )}
      </div>

      {/* Sub items */}
      {item.children.length > 0 && isOpened && (
        <ul
          className={`mt-2 ml-2  transition-max-height duration-300 overflow-hidden  w-full max-h-screen `}
        >
          {item.children.map((child) => (
            <li key={child.href} className="p-2 w-full hover:bg-gray-600">
              <Link href={child.href} className="flex items-center">
                <span className="ml-2">{child.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navigation;
