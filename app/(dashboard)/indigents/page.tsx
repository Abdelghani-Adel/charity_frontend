import { TOKEN_NAME } from "@/assets/enums";
import IndigentsTable from "@/components/tables/IndigentsTable";
import PageTitle from "@/components/ui/PageTitle";
import { getAllIndigents } from "@/services/indigentServices";
import { cookies } from "next/headers";
import React from "react";

const Page = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(TOKEN_NAME)?.value;

  const { data } = await getAllIndigents(token);

  return (
    <div>
      <PageTitle title="الحالات" />
      <IndigentsTable data={data} />
    </div>
  );
};

export default Page;
