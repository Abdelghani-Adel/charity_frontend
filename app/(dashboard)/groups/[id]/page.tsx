"use client";
import MUIDatatable from "@/components/tables/MUIDataTable";
import ReusableTable from "@/components/tables/Table";
import { HeadCell } from "@/components/tables/types";
import PageTitle from "@/components/ui/PageTitle";
import { getGroupInfo } from "@/services/groupServices";
import IApiRes_GetGroupInfo from "@/types/api_responses/ApiRes_GetGroupInfo";
import { MUIDataTableColumn } from "mui-datatables";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const headCells: MUIDataTableColumn[] = [
  {
    name: "id",
    label: "كود الحالة",
    options: {
      print: true,
      filter: false,
      sort: false,
    },
  },
  {
    name: "name",
    label: "إسم الحالة",
    options: {
      print: true,
      filter: false,
      sort: false,
    },
  },
];

const Page = () => {
  const [details, setDetails] = useState<IApiRes_GetGroupInfo>();
  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const { data } = await getGroupInfo(params.id.toLocaleString());
      if (data) setDetails(data);
      console.log(data);
    }
    fetchDetails();
  }, []);

  if (!details) return null;

  return (
    <div>
      <PageTitle title={details.group_name} />

      <MUIDatatable title="الحالات" columns={headCells} data={details.indigents ?? []} />
    </div>
  );
};

export default Page;
