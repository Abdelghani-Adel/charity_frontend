"use client";

import IApiRes_GetAllIndigents from "@/types/api_responses/IApiRes_GetAllIndigents";

import { MUIDataTableColumn, MUIDataTableColumnDef } from "mui-datatables";
import MUIDatatable from "./MUIDataTable";
import { useRouter } from "next/navigation";
import IIndigentRecord from "@/interfaces/responses/IIndigentRecord";

const columns: MUIDataTableColumn[] = [
  {
    name: "signature",
    label: "التوقيع",
    options: {
      print: true,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "amount",
    label: "المبلغ",
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
    name: "indigency_type_name",
    label: "نوع الإحتياج",
    options: {
      print: true,
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
    name: "phone",
    label: "الهاتف",
    options: {
      print: true,
      filter: false,
      sort: false,
      searchable: false,
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
    name: "national_id",
    label: "الرقم القومي",
    options: {
      print: true,
      filter: false,
      sort: false,
    },
  },
  {
    name: "indigent_id",
    label: "كود الحالة",
    options: {
      print: true,
      filter: false,
      sort: false,
    },
  },
];

export default async function IndigentsTable({
  data,
}: Readonly<{ data: IApiRes_GetAllIndigents[] | IIndigentRecord[] | null }>) {
  const router = useRouter();
  const rowClick = (row: string[], meta: any) => {
    router.push(`/indigents/${row[row.length - 1]}`);
  };

  return (
    <MUIDatatable
      title={"الحالات"}
      data={data ?? []}
      columns={columns}
      rowClick={rowClick}
    />
  );
}
