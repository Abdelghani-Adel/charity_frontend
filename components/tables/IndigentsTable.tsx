"use client";
import { IIndigentRecord } from "@/types/api_responses/GetAllIndigents";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
import { HeadCell } from "./types";
import ReusableTable from "./Table";

const rows = [
  {
    indigent_id: 1082,
    national_id: "27811152702582",
    indigent_name: "فاطمه رضى حسن ابراهيم",
    phone: null,
    kids: null,
    indigency_type_name: "أيتام",
    governorate_name: "البحر الأحمر",
    city_name: "الغردقة",
    district_name: "الدهار",
    address: "حفر الباطن",
    is_active: true,
  },
  {
    indigent_id: 1083,
    national_id: "27609152602282",
    indigent_name: "مرفت عبدالنعيم على بيومى",
    phone: "01119968564",
    kids: null,
    indigency_type_name: "أيتام",
    governorate_name: "البحر الأحمر",
    city_name: "الغردقة",
    district_name: "الدهار",
    address: null,
    is_active: true,
  },
  {
    indigent_id: 1084,
    national_id: "28707180102606",
    indigent_name: "شيماء فتح الله عبد بركات",
    phone: "01018656992",
    kids: null,
    indigency_type_name: "أيتام",
    governorate_name: "البحر الأحمر",
    city_name: "الغردقة",
    district_name: "الدهار",
    address: "الاحياء",
    is_active: true,
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: IIndigentRecord[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells: HeadCell[] = [
  {
    id: "national_id",
    numeric: false,
    disablePadding: true,
    label: "الرقم القومي",
  },
  {
    id: "indigent_name",
    numeric: false,
    disablePadding: false,
    label: "الإسم",
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "الهاتف",
  },
  {
    id: "kids",
    numeric: true,
    disablePadding: false,
    label: "عدد الأطفال",
  },
  {
    id: "indigency_type_name",
    numeric: false,
    disablePadding: false,
    label: "نوع الإحتياج",
  },
  {
    id: "governorate_name",
    numeric: false,
    disablePadding: false,
    label: "المحافظة",
  },
  {
    id: "city_name",
    numeric: false,
    disablePadding: false,
    label: "المدينة",
  },
  {
    id: "district_name",
    numeric: false,
    disablePadding: false,
    label: "الحي",
  },
  {
    id: "address",
    numeric: false,
    disablePadding: false,
    label: "العنوان",
  },
];

const columns = headCells.map((cell) => cell.id);

export default function IndigentsTable() {
  return <ReusableTable columns={columns} headCells={headCells} rows={rows} />;
}
