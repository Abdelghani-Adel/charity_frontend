"use client";

import React from "react";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import { v4 } from "uuid";

type IProps = {
  options: ISelectOption[];
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInput = (props: IProps) => {
  const id = v4();
  const { options, name, value, placeholder, disabled, label, onChange } = props;

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
        {(!value || value.length == 0) && <option>{placeholder}</option>}
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
