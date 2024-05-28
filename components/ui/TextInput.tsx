"use client";

import React from "react";

type IProps = {
  id: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: IProps) => {
  const { id, placeholder, name, value, disabled, onChange } = props;

  return (
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
  );
};

export default TextInput;
