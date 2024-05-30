import React, { useRef, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import { v4 } from "uuid";

type IProps = {
  placeholder: string;
  value: Date;
  label: string;
  disabled: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput = (props: IProps) => {
  const id = v4();
  const { placeholder, name, value, label, disabled, onChange } = props;
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    !disabled && dateInputRef.current?.showPicker();
  };

  return (
    <FormGroup>
      <FormLabel htmlFor={id} label={label} />
      <div className="relative ">
        <button
          onClick={handleButtonClick}
          disabled={disabled}
          className="flex items-center justify-between inputField"
        >
          <span>{value?.toDateString() || placeholder}</span>
          <MdOutlineDateRange />
        </button>
        <input
          type="date"
          id={id}
          disabled={disabled}
          name={name}
          ref={dateInputRef}
          value={value?.toDateString()}
          onChange={onChange}
          className="invisible absolute bottom-0 left-0"
        />
      </div>
    </FormGroup>
  );
};

export default DateInput;
