import React from "react";

type IProps = {
  error: string;
};

const InputError = (props: IProps) => {
  const { error } = props;
  return <div>{error}</div>;
};

export default InputError;
