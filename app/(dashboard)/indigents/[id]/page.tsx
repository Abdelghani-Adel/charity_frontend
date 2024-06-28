"use client";
import PageTitle from "@/components/ui/PageTitle";
import { getIndigentDetails } from "@/services/indigentServices";
import { IApiRes_GetIndigentDetails } from "@/types/api_responses/IApiRes_GetIndigentDetails";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PersonalInfo from "./_info";
import ReusableTable from "@/components/tables/Table";
import { HeadCell } from "@/components/tables/types";

const Page = () => {
  const [details, setDetails] = useState<IApiRes_GetIndigentDetails>();
  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const { data } = await getIndigentDetails(params.id.toLocaleString());
      if (data) setDetails(data);
      console.log(data);
    }
    fetchDetails();
  }, []);

  if (!details) return null;

  return (
    <div>
      <PageTitle title="المعلومات الشخصية" />
      <ReusableTable headCells={infoHeader} rows={[details.info]} />

      <PageTitle title="المساعدات" />
      <ReusableTable headCells={aidsHeader} rows={details.aids ?? []} />
    </div>
  );
};

export default Page;

const aidsHeader: HeadCell[] = [
  {
    id: "organization_name",
    label: "إسم الجمعية",
  },
  {
    id: "aid_type_name",
    label: "نوع المساعدة",
  },
  {
    id: "description",
    label: "ملاحظات",
  },
  {
    id: "timestamp",
    label: "تاريخ المساعدة",
  },
];

const infoHeader: HeadCell[] = [
  {
    id: "national_id",
    label: "الرقم القومي",
  },
  {
    id: "name",
    label: "الإسم",
  },
  {
    id: "phone",
    label: "الهاتف",
  },
  {
    id: "kids",
    label: "عدد الأطفال",
  },
  {
    id: "indigency_type_name",
    label: "نوع الإحتياج",
  },
  {
    id: "governorate_name",
    label: "المحافظة",
  },
  {
    id: "city_name",
    label: "المدينة",
  },
  {
    id: "district_name",
    label: "الحي",
  },
  {
    id: "address",
    label: "العنوان",
  },
];
