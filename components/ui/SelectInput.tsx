"use client";

import React from "react";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";

type IProps = {
  id: string;
  options: ISelectOption[];
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInput = (props: IProps) => {
  const { id, options, name, value, disabled, label, onChange } = props;

  return (
    <FormGroup>
      <FormLabel htmlFor={id} label={label} />
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        className="inputField"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormGroup>
  );
};

export default SelectInput;
