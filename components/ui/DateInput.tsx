import React, { useRef, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";

type IProps = {
  id: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput = (props: IProps) => {
  const { id, placeholder, name, value, disabled, onChange } = props;
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    !disabled && dateInputRef.current?.showPicker();
  };

  return (
    <div className="relative ">
      <button
        onClick={handleButtonClick}
        disabled={disabled}
        className="flex items-center justify-between inputField"
      >
        <span>{value || placeholder}</span>
        <MdOutlineDateRange />
      </button>
      <input
        type="date"
        id={id}
        disabled={disabled}
        name={name}
        ref={dateInputRef}
        value={value}
        onChange={onChange}
        className="invisible absolute bottom-0 left-0"
      />
    </div>
  );
};

export default DateInput;
