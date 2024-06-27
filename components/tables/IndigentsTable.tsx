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
import { HeadCell } from "./types";
import ReusableTable from "./Table";
import { useEffect, useState } from "react";
import IApiRes_GetAllIndigents from "@/types/api_responses/IApiRes_GetAllIndigents";
import { getAllIndigents } from "@/services/indigentServices";

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

const headCells: HeadCell[] = [
  {
    id: "national_id",
    label: "الرقم القومي",
  },
  {
    id: "indigent_name",
    label: "الإسم",
  },
  {
    id: "phone",
    label: "الهاتف",
  },
  {
    id: "kids",
    label: "عدد الأطفال",
  },
  {
    id: "indigency_type_name",
    label: "نوع الإحتياج",
  },
  {
    id: "governorate_name",
    label: "المحافظة",
  },
  {
    id: "city_name",
    label: "المدينة",
  },
  {
    id: "district_name",
    label: "الحي",
  },
  {
    id: "address",
    label: "العنوان",
  },
];

const columns = headCells.map((cell) => cell.id);

export default function IndigentsTable() {
  const [indigentList, setIndigentList] = useState<IApiRes_GetAllIndigents>([]);

  useEffect(() => {
    async function fetchIndigents() {
      const { data } = await getAllIndigents();
      if (data) setIndigentList(data);
    }
    fetchIndigents();
  }, []);

  return <ReusableTable columns={columns} headCells={headCells} rows={indigentList} />;
}
