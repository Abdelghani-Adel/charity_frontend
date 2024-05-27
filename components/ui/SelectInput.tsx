"use client";

import React from "react";

type IProps = {
  id: string;
  options: ISelectOption[];
  name: string;
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInput = (props: IProps) => {
  const { id, options, name, value, disabled, onChange } = props;

  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      dir="rtl"
      disabled={disabled}
      name={name}
      className="text-right border border-gray-300 rounded-md px-3 py-2 focus:outline-none 
                disabledInput"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
