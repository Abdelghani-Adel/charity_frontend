"use client";
import { getAllIndigents } from "@/services/indigentServices";
import IApiRes_GetAllIndigents from "@/types/api_responses/IApiRes_GetAllIndigents";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { MUIDataTableColumnDef } from "mui-datatables";
import MUIDatatable from "./MUIDataTable";

const columns: MUIDataTableColumnDef[] = [
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
    router.push(`/indigents/${row[row.length - 1]}`);
  };

  return (
    <MUIDatatable
      title={"الحالات"}
      data={indigentList}
      columns={columns.toReversed()}
      onRowClick={onRowClick}
    />
  );
}
