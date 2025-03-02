"use client";
import SearchComponent from "@/components/forms/SearchComponent";
import IndigentsTable from "@/components/tables/IndigentsTable";
import PageTitle from "@/components/ui/PageTitle";
import { IGroupDetailsRecord } from "@/interfaces/responses/IGroupDetailsRecord";
import { getGroupInfo } from "@/services/groupServices";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Page = () => {
  const [details, setDetails] = useState<IGroupDetailsRecord>();
  const params = useParams();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      const { data } = await getGroupInfo(params.id.toLocaleString());
      if (data) setDetails(data);
      console.log(data);
    }
    fetchDetails();
  }, [reload]);

  if (!details) return null;

  return (
    <div className="space-y-4">
      <PageTitle title={details.group_details.group_name} />
      <SearchComponent
        grp_id={params.id.toLocaleString()}
        reload={() => setReload((prev) => !prev)}
      />

      <IndigentsTable data={details.group_details.indigents ?? []} />
    </div>
  );
};

export default Page;
