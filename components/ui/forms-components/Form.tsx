import React from "react";

type IProps = {
  children: React.ReactNode;
};

const Form = (props: IProps) => {
  const { children } = props;
  return (
    <div className="relative grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};

export default Form;
