import { TOKEN_NAME } from "@/assets/enums";
import GroupsTable from "@/components/tables/GroupsTable";
import PageTitle from "@/components/ui/PageTitle";
import { getOrgGroups } from "@/services/groupServices";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(TOKEN_NAME)?.value;
  const { data } = await getOrgGroups(token);

  return (
    <div>
      <PageTitle title="المجموعات" />
      <GroupsTable data={data} />
    </div>
  );
};

export default Page;
