import IndigentsTable from "@/components/tables/IndigentsTable";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const Page = () => {
  return (
    <div>
      <PageTitle title="الحالات" />
      <IndigentsTable />
    </div>
  );
};

export default Page;
