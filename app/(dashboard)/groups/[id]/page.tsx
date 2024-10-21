"use client";
import IndigentsTable from "@/components/tables/IndigentsTable";
import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import { IGroupDetailsRecord } from "@/interfaces/responses/IGroupDetailsRecord";
import { getGroupInfo } from "@/services/groupServices";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { IApiRes_GetListOptions } from "@/types/api_responses/IApiRes_GetListOptions";
import { getIndigentListOptions } from "@/services/ListServices";
import SearchComponent from "@/components/forms/SearchComponent";

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
