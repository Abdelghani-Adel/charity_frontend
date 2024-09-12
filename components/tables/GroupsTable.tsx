"use client";

import { MUIDataTableColumn } from "mui-datatables";
import { useRouter } from "next/navigation";
import MUIDatatable from "./MUIDataTable";
import { IGroupListRecord } from "@/interfaces/responses/IGroupListRecord";

const columns: MUIDataTableColumn[] = [
  {
    name: "group_description",
    label: "وصف المجموعة",
    options: {
      print: false,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "group_name",
    label: "إسم المجموعة",
    options: {
      print: true,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
  {
    name: "group_id",
    label: "ID",
    options: {
      print: false,
      filter: false,
      sort: false,
      searchable: false,
    },
  },
];

export default async function GroupsTable({ data }: Readonly<{ data: IGroupListRecord[] | null }>) {
  const router = useRouter();
  const rowClick = (row: string[], meta: any) => {
    router.push(`/groups/${row[row.length - 1]}`);
  };

  return (
    <MUIDatatable title={"المجموعات"} data={data ?? []} columns={columns} rowClick={rowClick} />
  );
}
