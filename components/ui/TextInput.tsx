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
      className="text-right placeholder-right text-gray-500 placeholder-opacity-50 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
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
