"use client";
import Button from "@/components/ui/Button";
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
  const [cities, setCities] = useState<ISelectOption[]>([{ value: "", label: "" }]);

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

  useEffect(() => {
    const fetchGoverntes = async () => {
      const { data, error } = await getGovernates();
      const options = generateSelectOptions(data.governates, "id", "name");
      setGovernates(options);
    };

    fetchGoverntes();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      const { data, error } = await getCities(formData?.governateId ?? "");
      const options = generateSelectOptions(data.cities, "id", "name");
      setCities(options);
    };

    fetchCities();
  }, [formData?.governateId]);

  return (
    <div>
      <PageTitle title="إضافة حالة" />

      <Form>
        <FormGroup>
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
          <FormLabel htmlFor="city" label="المدينة" />
          <SelectInput
            disabled={nidExistsBefore}
            id="city"
            name="cityId"
            options={cities}
            onChange={onInputChange}
            value={formData?.cityId ?? ""}
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
        </FormGroup>

        <Button disabled={nidExistsBefore}>إضافة</Button>
      </Form>
    </div>
  );
};

export default Page;
