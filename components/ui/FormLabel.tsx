import React from "react";

type IProps = {
  label: string;
  htmlFor: string;
};

const FormLabel = (props: IProps) => {
  const label = props.label;
  const htmlFor = props.htmlFor;

  return (
    <label htmlFor={htmlFor} className="formLabel">
      {label}
    </label>
  );
};

export default FormLabel;
