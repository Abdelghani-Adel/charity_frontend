"use client";

import React from "react";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";

type IProps = {
  id: string;
  placeholder: string;
  value: string;
  label: string;
  disabled: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: IProps) => {
  const { id, placeholder, name, value, label, disabled, onChange } = props;

  return (
    <FormGroup>
      <FormLabel htmlFor={id} label={label} />
      <input
        type="text"
        className="inputField"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </FormGroup>
  );
};

export default TextInput;
