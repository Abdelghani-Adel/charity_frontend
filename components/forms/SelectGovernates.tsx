import { getGovernates } from "@/services/infoServices";
import { generateSelectOptions } from "@/utils/generateSelectOptions";
import React, { useEffect, useState } from "react";
import SelectInput from "../ui/SelectInput";

type IProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  disabled: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectGovernates = (props: IProps) => {
  const { id, label, name, disabled, onInputChange, value } = props;
  const [governates, setGovernates] = useState<ISelectOption[]>([{ value: "", label: "" }]);
  useEffect(() => {
    const fetchGoverntes = async () => {
      const { data, error } = await getGovernates();
      const options = generateSelectOptions(data.governates, "id", "name");
      setGovernates(options);
    };

    fetchGoverntes();
  }, []);

  return (
    <SelectInput
      disabled={disabled}
      id={id}
      name={name}
      label={label}
      options={governates}
      onChange={onInputChange}
      value={value}
    />
  );
};

export default SelectGovernates;
