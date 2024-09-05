"use client";

import { MUIDataTableColumn, MUIDataTableColumnDef } from "mui-datatables";
import MUIDatatable from "./MUIDataTable";
import { useRouter } from "next/navigation";
import IApiRes_GetOrgGroups from "@/types/api_responses/IApiRes_GetOrgGroups";
import { useEffect, useState } from "react";
import { getOrgGroups } from "@/services/groupServices";

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

export default async function GroupsTable({
  data,
}: Readonly<{ data: IApiRes_GetOrgGroups | null }>) {
  const router = useRouter();
  const rowClick = (row: string[], meta: any) => {
    router.push(`/groups/${row[row.length - 1]}`);
  };

  return (
    <MUIDatatable title={"المجموعات"} data={data ?? []} columns={columns} rowClick={rowClick} />
  );
}
