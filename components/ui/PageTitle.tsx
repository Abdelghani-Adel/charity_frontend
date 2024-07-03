import React from "react";

type IProps = {
  title: string;
};

const PageTitle = (props: IProps) => {
  return (
    <h2 className="p-2 rounded-md border-r-8 border-2 font-mono text-2xl text-right border-primary bg-gray-200 mb-5 font-bold">
      {props.title}
    </h2>
  );
};

export default PageTitle;
