import React from "react";

type IProps = {
  children: React.ReactNode;
};

const FormGroup = (props: IProps) => {
  const { children } = props;
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default FormGroup;
