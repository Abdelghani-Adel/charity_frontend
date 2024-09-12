"use client";
import IndigentsTable from "@/components/tables/IndigentsTable";
import PageTitle from "@/components/ui/PageTitle";
import { IGroupDetailsRecord } from "@/interfaces/responses/IGroupDetailsRecord";
import { getGroupInfo } from "@/services/groupServices";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [details, setDetails] = useState<IGroupDetailsRecord>();
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
      <PageTitle title={details.group_details.group_name} />

      <IndigentsTable data={details.group_details.indigents ?? []} />
    </div>
  );
};

export default Page;
