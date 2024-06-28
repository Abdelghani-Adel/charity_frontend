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
import { useRouter } from "next/navigation";

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

export default function IndigentsTable() {
  const router = useRouter();
  const [indigentList, setIndigentList] = useState<IApiRes_GetAllIndigents[]>([]);

  useEffect(() => {
    async function fetchIndigents() {
      const { data } = await getAllIndigents();
      if (data) setIndigentList(data);
    }
    fetchIndigents();
  }, []);

  const onRowClick = (row: IApiRes_GetAllIndigents) => {
    router.push(`/indigents/${row.indigent_id}`);
  };

  return <ReusableTable headCells={headCells} rows={indigentList} onRowClick={onRowClick} />;
}
