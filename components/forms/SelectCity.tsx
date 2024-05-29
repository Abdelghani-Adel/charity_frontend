import { getCities } from "@/services/infoServices";
import { generateSelectOptions } from "@/utils/generateSelectOptions";
import React, { useEffect, useState } from "react";
import FormGroup from "../ui/FormGroup";
import FormLabel from "../ui/FormLabel";
import SelectInput from "../ui/SelectInput";

type IProps = {
  govId: string;
  value: string;
  disabled: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectCity = (props: IProps) => {
  const { govId, value, disabled, onInputChange } = props;
  const [cities, setCities] = useState<ISelectOption[]>([{ value: "", label: "" }]);

  useEffect(() => {
    const fetchCities = async () => {
      const { data, error } = await getCities(govId);
      const options = generateSelectOptions(data.cities, "id", "name");
      setCities(options);
    };

    fetchCities();
  }, [govId]);

  return (
    <SelectInput
      disabled={disabled}
      id="city"
      name="cityId"
      label="المدينة"
      options={cities}
      onChange={onInputChange}
      value={value}
    />
  );
};

export default SelectCity;
