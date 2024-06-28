import ReusableTable from "@/components/tables/Table";
import { HeadCell } from "@/components/tables/types";
import PageTitle from "@/components/ui/PageTitle";
import { IApiRes_GetIndigentDetails } from "@/types/api_responses/IApiRes_GetIndigentDetails";
import React from "react";

const PersonalInfo = ({ details }: { details: IApiRes_GetIndigentDetails | undefined }) => {
  const headCells: HeadCell[] = [
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
  const columns = headCells.map((cell) => cell.id);

  if (!details?.info) return null;
  console.log(Object.values(details.info));

  return (
    <>
      <PageTitle title="المعلومات الشخصية" />
      <ReusableTable columns={columns} headCells={headCells} rows={[details.info]} />

      {/* <div className="relative grid gap-x-5 gap-y-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {details?.info?.national_id && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">الرقم القومي</h2>
            <p className="font-normal">{details.info.national_id}</p>
          </div>
        )}

        {details?.info?.name && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">إسم الحالة</h2>
            <p className="font-normal">{details.info.name}</p>
          </div>
        )}

        {details?.info?.phone && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">رقم التليفون</h2>
            <p className="font-normal">{details.info.phone}</p>
          </div>
        )}

        {details?.info?.kids && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">عدد الأطفال</h2>
            <p className="font-normal">{details.info.kids}</p>
          </div>
        )}

        {details?.info?.indigency_type_name && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">نوع الحالة</h2>
            <p className="font-normal">{details.info.indigency_type_name}</p>
          </div>
        )}

        {details?.info?.governorate_name && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">المحافظة</h2>
            <p className="font-normal">{details.info.governorate_name}</p>
          </div>
        )}

        {details?.info?.city_name && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">المدينة</h2>
            <p className="font-normal">{details.info.city_name}</p>
          </div>
        )}

        {details?.info?.district_name && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">الحيّ</h2>
            <p className="font-normal">{details.info.district_name}</p>
          </div>
        )}

        {details?.info?.address && (
          <div>
            <h2 className="text-2xl font-bold text-secondary">العنوان</h2>
            <p className="font-normal">{details.info.address}</p>
          </div>
        )}
      </div> */}
    </>
  );
};

export default PersonalInfo;
