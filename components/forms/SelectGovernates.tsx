import React, { useEffect, useState } from "react";
import FormGroup from "../ui/FormGroup";
import FormLabel from "../ui/FormLabel";
import SelectInput from "../ui/SelectInput";
import { getGovernates } from "@/services/infoServices";
import { generateSelectOptions } from "@/utils/generateSelectOptions";

type IProps = {
  value: string;
  disabled: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectGovernates = (props: IProps) => {
  const { disabled, onInputChange, value } = props;
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
    <FormGroup>
      <FormLabel htmlFor="gov" label="المحافظة" />
      <SelectInput
        disabled={disabled}
        id="gov"
        name="governateId"
        options={governates}
        onChange={onInputChange}
        value={value}
      />
    </FormGroup>
  );
};

export default SelectGovernates;
