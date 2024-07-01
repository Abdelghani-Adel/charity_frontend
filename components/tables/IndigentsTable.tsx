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

import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";

const options = {
  filterType: "checkbox",
};

const headCells: MUIDataTableColumnDef[] = [
  {
    name: "indigent_id",
    label: "كود الحالة",
    options: {
      print: true,
      filter: false,
      sort: false,
    },
  },
  {
    name: "national_id",
    label: "الرقم القومي",
    options: {
      print: true,
      filter: false,
      sort: false,
    },
  },
  {
    name: "indigent_name",
    label: "الإسم",
    options: {
      print: true,
      filter: false,
      sort: false,
    },
  },
  {
    name: "phone",
    label: "الهاتف",
    options: {
      print: false,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "kids",
    label: "عدد الأطفال",
    options: {
      print: true,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "indigency_type_name",
    label: "نوع الإحتياج",
    options: {
      print: true,
      searchable: false,
    },
  },
  {
    name: "governorate_name",
    label: "المحافظة",
    options: {
      print: false,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "city_name",
    label: "المدينة",
    options: {
      print: false,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "district_name",
    label: "الحي",
    options: {
      print: true,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "address",
    label: "العنوان",
    options: {
      print: false,
      filter: false,
      sort: false,
      searchable: false,
    },
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

  const onRowClick = (row: string[], meta: any) => {
    router.push(`/indigents/${row[0]}`);
  };

  return (
    <div dir="ltr" className="text-right">
      <MUIDataTable
        title={"الحالات"}
        data={indigentList}
        columns={headCells}
        options={{
          filterType: "multiselect",
          fixedHeader: true,
          onRowClick: onRowClick,
          responsive: "standard",
          selectableRows: "none",
        }}
      />
    </div>
  );

  // return <ReusableTable headCells={headCells} rows={indigentList} onRowClick={onRowClick} />;
}
