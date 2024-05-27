import React from "react";

type IProps = {
  title: string;
};

const PageTitle = (props: IProps) => {
  return (
    <h2 className="p-2 rounded-md border-r-8 font-mono text-2xl text-right border-secondary-dark bg-gray-300 mb-5">
      {props.title}
    </h2>
  );
};

export default PageTitle;
