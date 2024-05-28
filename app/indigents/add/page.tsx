"use client";
import IndigentForm from "@/components/forms/IndigentForm";
import Button from "@/components/ui/Button";
import DateInput from "@/components/ui/DateInput";
import Form from "@/components/ui/Form";
import FormGroup from "@/components/ui/FormGroup";
import FormLabel from "@/components/ui/FormLabel";
import PageTitle from "@/components/ui/PageTitle";
import SelectInput from "@/components/ui/SelectInput";
import TextInput from "@/components/ui/TextInput";
import { getIndigentData } from "@/services/indigentServices";
import { getCities, getGovernates } from "@/services/infoServices";
import { generateSelectOptions } from "@/utils/generateSelectOptions";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState<Partial<IIndigentInfo> | undefined | null>();
  const [governates, setGovernates] = useState<ISelectOption[]>([{ value: "", label: "" }]);

  const [nidExistsBefore, setNidExistsBefore] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onNidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Updates the local state.
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, ["nid"]: value }));

    // Checks if the NID exists.
    if (value.length === 7) {
      let indigentInfo: IIndigentInfo | null = null;
      const { data } = await getIndigentData(value);

      if (data) {
        indigentInfo = data;
        setFormData(indigentInfo);
        setNidExistsBefore(true);
      } else {
        setNidExistsBefore(false);
      }
    } else if (nidExistsBefore) {
      setNidExistsBefore(false);
      setFormData((prev) => ({ nid: prev?.nid }));
    }
  };

  return (
    <div>
      <PageTitle title="إضافة حالة" />

      <Form>
        <IndigentForm formData={formData} onFormChange={() => {}} />
        {/* <FormGroup>
          <FormLabel htmlFor="nid" label="الرقم القومى" />
          <TextInput
            disabled={false}
            id="nid"
            name="nid"
            placeholder="الرقم القومي"
            onChange={onNidChange}
            value={formData?.nid ?? ""}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="name" label="الإسم رباعي" />
          <TextInput
            disabled={nidExistsBefore}
            id="name"
            name="name"
            placeholder="الإسم رباعي"
            onChange={onInputChange}
            value={formData?.name ?? ""}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="birthDate" label="تاريخ الميلاد" />{" "}
          <DateInput
            disabled={nidExistsBefore}
            id="birthDate"
            name="birthDate"
            placeholder="أدخل تاريخ الميلاد"
            onChange={onInputChange}
            value={formData?.birthDate ?? ""}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="gender" label="الجنس" />
          <SelectInput
            disabled={nidExistsBefore}
            id="gender"
            name="gender"
            options={[
              { value: "ذكر", label: "ذكر" },
              { value: "أنثي", label: "أنثي" },
            ]}
            onChange={onInputChange}
            value={formData?.gender ?? ""}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="phone" label="رقم التليفون" />
          <TextInput
            disabled={nidExistsBefore}
            id="phone"
            name="phone"
            placeholder="رقم التليفون"
            onChange={onInputChange}
            value={formData?.phone ?? ""}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="gov" label="المحافظة" />
          <SelectInput
            disabled={nidExistsBefore}
            id="gov"
            name="governateId"
            options={governates}
            onChange={onInputChange}
            value={formData?.governateId ?? ""}
          />
        </FormGroup>

       

        <FormGroup>
          <FormLabel htmlFor="destrict" label="المنطقة / الحيّ" />
          <TextInput
            disabled={nidExistsBefore}
            id="destrict"
            name="destrict"
            placeholder="المنطقة / الحيّ"
            onChange={onInputChange}
            value={formData?.destrictId ?? ""}
          />
        </FormGroup> */}

        <div className="col-span-3">
          <Button disabled={nidExistsBefore}>إضافة</Button>
        </div>
      </Form>
    </div>
  );
};

export default Page;
