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
  const [indigentList, setIndigentList] = useState<IApiRes_GetListOptions[] | undefined>();
  const params = useParams();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    const fetchIndigentList = async () => {
      const { data } = await getIndigentListOptions();
      if (data) setIndigentList(data);
    };

    fetchIndigentList();
  }, []);

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
    <div className="space-y-4">
      <PageTitle title={details.group_details.group_name} />
      <Button>
        <IoMdAddCircleOutline />
        إضافة حالات للمجموعة
      </Button>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {indigentList?.map((indigent) => (
            <MenuItem key={indigent.value} value={indigent.value}>
              <Checkbox checked={personName.indexOf(indigent.value) > -1} />
              <ListItemText primary={indigent.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <IndigentsTable data={details.group_details.indigents ?? []} />
    </div>
  );
};

export default Page;
