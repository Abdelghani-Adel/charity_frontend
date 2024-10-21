import React, { useState, ChangeEvent } from "react";
import { TextField, List, ListItem, ListItemText, CircularProgress, Button } from "@mui/material";
import axios from "axios";
import { searchIndigent } from "@/services/indigentServices";
import AsyncSelect from "react-select/async";
import { MultiValue } from "react-select";
import { addToGroup } from "@/services/groupServices";
import { IAddToGroupRequest } from "@/interfaces/requests/IAddToGroupRequest";

// Define the type for the search result
interface OptionType {
  value: string;
  label: string;
}

const SearchComponent = ({ grp_id, reload }: { grp_id: string; reload: () => void }) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType> | null>(null);

  // Function to load options from the API
  const loadOptions = async (inputValue: string): Promise<OptionType[]> => {
    if (!inputValue) return [];

    try {
      const response = await searchIndigent(inputValue);

      // Assuming the API returns a list of items with 'name' property
      return response.data.map((item: { name: string; id: string }) => ({
        label: item.name,
        value: item.id,
      }));
    } catch (err) {
      console.error("Error fetching options:", err);
      return [];
    }
  };

  // Handle when options are selected
  const handleChange = (selected: MultiValue<OptionType> | null) => {
    setSelectedOptions(selected);
    console.log("Selected:", selected);
  };

  // Function to submit the selected options
  const handleSubmit = async () => {
    if (!selectedOptions || selectedOptions.length === 0) {
      alert("Please select at least one option");
      return;
    }

    try {
      const requst: IAddToGroupRequest = { group_id: grp_id, indigents: [] };

      selectedOptions.map((option) => requst.indigents.push(option.value));

      const response = await addToGroup(requst);

      // Log or handle successful submission
      console.log("Response from submission:", response.data);
      alert("تمت إضافة الحالات بنجاح!");

      // Clear the selected options
      setSelectedOptions(null);
    } catch (err) {
      console.error("Error submitting selected options:", err);
      alert("فشل إضافة الحالات");
    } finally {
      reload();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        onChange={handleChange}
        value={selectedOptions}
        isMulti
        placeholder="البحث بإسم الحالة"
        className="w-full"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        حفظ
      </Button>
    </div>
  );
};

export default SearchComponent;
