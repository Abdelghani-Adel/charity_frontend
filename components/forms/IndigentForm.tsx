import React, { useEffect, useState } from "react";
import FormGroup from "@/components/ui/FormGroup";
import FormLabel from "@/components/ui/FormLabel";
import SelectInput from "@/components/ui/SelectInput";
import TextInput from "@/components/ui/TextInput";
import { getIndigentData } from "@/services/indigentServices";
import DateInput from "../ui/DateInput";
import SelectGovernates from "./SelectGovernates";
import SelectCity from "./SelectCity";
import NationalId from "./NationalId";

type IProps = {
  formData: Partial<IIndigentInfo> | undefined | null;
  onFormChange?: (form: Partial<IIndigentInfo> | undefined | null) => void;
  isReadOnly?: boolean;
};

const IndigentForm = (props: IProps) => {
  const { isReadOnly, formData, onFormChange } = props;
  const [form, setForm] = useState<Partial<IIndigentInfo> | undefined | null>(formData);
  const [nidExistsBefore, setNidExistsBefore] = useState(false);

  useEffect(() => {
    setForm(formData);
  }, [formData]);

  useEffect(() => {
    onFormChange && onFormChange(form);
  }, [form]);

  const onNidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Updates the local state.
    const value = e.target.value;
    setForm((prevData) => ({ ...prevData, ["nid"]: value }));

    // Checks if the NID exists.
    if (value.length === 7) {
      let indigentInfo: IIndigentInfo | null = null;
      const { data } = await getIndigentData(value);

      if (data) {
        indigentInfo = data;
        setForm(indigentInfo);
        setNidExistsBefore(true);
      } else {
        setNidExistsBefore(false);
      }
    } else if (nidExistsBefore) {
      setNidExistsBefore(false);
      setForm((prev) => ({ nid: prev?.nid }));
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <NationalId value={form?.nid ?? ""} onChange={onNidChange} />

      <FormGroup>
        <FormLabel htmlFor="name" label="الإسم رباعي" />
        <TextInput
          disabled={nidExistsBefore}
          id="name"
          name="name"
          placeholder="الإسم رباعي"
          onChange={onInputChange}
          value={form?.name ?? ""}
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
          value={form?.birthDate ?? ""}
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
          value={form?.gender ?? ""}
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
          value={form?.phone ?? ""}
        />
      </FormGroup>

      <SelectGovernates
        disabled={nidExistsBefore}
        onInputChange={onInputChange}
        value={form?.governateId ?? ""}
      />

      <SelectCity
        disabled={nidExistsBefore}
        onInputChange={onInputChange}
        value={form?.cityId ?? ""}
        govId={form?.governateId ?? ""}
      />

      <FormGroup>
        <FormLabel htmlFor="destrict" label="المنطقة / الحيّ" />
        <TextInput
          disabled={nidExistsBefore}
          id="destrict"
          name="destrict"
          placeholder="المنطقة / الحيّ"
          onChange={onInputChange}
          value={form?.destrictId ?? ""}
        />
      </FormGroup>
    </>
  );
};

export default IndigentForm;
