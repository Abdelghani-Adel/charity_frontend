import TextInput from "@/components/ui/TextInput";
import cities from "@/public/data/cities.json";
import districts from "@/public/data/districts.json";
import governates from "@/public/data/gov.json";
import indigencyTypes from "@/public/data/indigencyTypes.json";
import { formatDate } from "@/utils/dates";
import Button from "../ui/Button";
import Form from "../ui/Form";
import SelectInput from "../ui/SelectInput";
import { useAddIndigent } from "./useAddIndigent";

const AddIndigentForm = () => {
  const { form, fieldsDisabled, onInputChange } = useAddIndigent();

  return (
    <Form>
      <TextInput
        label="الرقم القومى"
        placeholder="الرقم القومي"
        name="nid"
        value={form?.nid ?? ""}
        disabled={false}
        onChange={onInputChange}
      />

      <TextInput
        label="الإسم رباعي"
        placeholder="الإسم رباعي"
        name="name"
        value={form?.name ?? ""}
        disabled={fieldsDisabled}
        onChange={onInputChange}
      />

      <TextInput
        label="رقم التليفون"
        placeholder="رقم التليفون"
        name="phone"
        value={form?.phone ?? ""}
        disabled={fieldsDisabled}
        onChange={onInputChange}
      />

      <SelectInput
        label="نوع الحالة"
        placeholder="نوع الحالة"
        name="indigencyTypeId"
        value={form?.indigencyTypeId ?? "31"}
        disabled={fieldsDisabled}
        onChange={onInputChange}
        options={indigencyTypes}
      />

      <SelectInput
        label="المنطقة / الحيّ"
        placeholder="المنطقة / الحيّ"
        name="destrictId"
        value={form?.destrictId ?? ""}
        disabled={fieldsDisabled}
        onChange={onInputChange}
        options={districts}
      />

      <SelectInput
        label="المدينة"
        placeholder="إختر المدينة"
        name="cityId"
        value={form?.cityId ?? "01"}
        disabled
        onChange={onInputChange}
        options={cities}
      />

      <SelectInput
        label="محافظة الإقامة"
        placeholder="إختر المحافظة"
        name="governateId"
        value={form?.governateId ?? "31"}
        disabled
        onChange={onInputChange}
        options={governates}
      />

      <SelectInput
        label="محافظة الميلاد"
        placeholder="محافظة الميلاد"
        name="birthGov"
        value={form?.birthGov ?? ""}
        disabled={true}
        onChange={onInputChange}
        options={governates}
      />

      <TextInput
        label="تاريخ الميلاد"
        placeholder="تاريخ الميلاد"
        name="birthDate"
        value={form?.birthDate ? formatDate(form.birthDate) : ""}
        disabled={true}
        onChange={onInputChange}
      />

      <TextInput
        label="السنّ"
        placeholder="السنّ"
        name="age"
        value={form?.age ?? ""}
        disabled={true}
        onChange={onInputChange}
      />

      {/* <SelectGender
        label="الجنس"
        placeholder=""
        name="gender"
        value={form?.gender ?? ""}
        disabled={true}
        onChange={onInputChange}
      /> */}

      <div className="md:col-span-2 xl:col-span-3">
        <Button disabled={fieldsDisabled}>إضافة</Button>
      </div>
    </Form>
  );
};

export default AddIndigentForm;
