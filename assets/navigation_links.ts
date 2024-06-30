import React from "react";
import { FaUsersLine } from "react-icons/fa6";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { LiaIdCard } from "react-icons/lia";
import { UserRole } from "./enums";

const { root, admin, charityAdmin, charityUser } = UserRole;

export type INavLink = {
  href: string;
  label: string;
  icon: React.FC;
  roles: string[];
  children: { href: string; label: string; roles: string[] }[];
};

const navLinks: INavLink[] = [
  {
    href: "/dashboard",
    label: "الصفحة الرئيسية",
    icon: IoHomeOutline,
    roles: [root, admin, charityAdmin, charityUser],
    children: [],
  },
  {
    href: "/indigents",
    label: "الحالات",
    icon: LiaIdCard,
    roles: [root, admin, charityAdmin, charityUser],
    children: [
      { href: "/indigents/add", label: "إضافة", roles: [root, admin, charityAdmin, charityUser] },
      {
        href: "/indigents/inquery",
        label: "إستعلام",
        roles: [root, admin, charityAdmin, charityUser],
      },
      {
        href: "/indigents/edit",
        label: "طلب تعديل",
        roles: [root, admin, charityAdmin, charityUser],
      },
    ],
  },
  {
    href: "/aids",
    label: "المساعدات",
    icon: FaUsersLine,
    roles: [root, admin, charityAdmin, charityUser],
    children: [
      {
        href: "/aids/add",
        label: "إضافة",
        roles: [root, admin, charityAdmin, charityUser],
      },
    ],
  },
  {
    href: "/reports",
    label: "التقارير",
    icon: HiOutlineDocumentReport,
    roles: [root, admin, charityAdmin, charityUser],
    children: [
      {
        href: "/reports/inquery",
        label: "إستعلام عن حالة",
        roles: [root, admin, charityAdmin, charityUser],
      },
    ],
  },
];

export default navLinks;
