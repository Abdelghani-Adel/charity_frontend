import SelectInput from "@/components/ui/SelectInput";
import TextInput from "@/components/ui/TextInput";
import { formatDate } from "@/utils/dates";
import Button from "../ui/Button";
import Form from "../ui/Form";
import SelectCity from "./SelectCity";
import SelectGovernates from "./SelectGovernates";
import { useAddIndigent } from "./useAddIndigent";

const AddIndigentForm = () => {
  const { form, fieldsDisabled, onInputChange } = useAddIndigent();

  return (
    <Form>
      <TextInput
        id="nid"
        name="nid"
        label="الرقم القومى"
        placeholder="الرقم القومي"
        disabled={false}
        onChange={onInputChange}
        value={form?.nid ?? ""}
      />

      <TextInput
        disabled={fieldsDisabled}
        id="name"
        name="name"
        label="الإسم رباعي"
        placeholder="الإسم رباعي"
        onChange={onInputChange}
        value={form?.name ?? ""}
      />

      <TextInput
        disabled={fieldsDisabled}
        id="phone"
        name="phone"
        label="رقم التليفون"
        placeholder="رقم التليفون"
        onChange={onInputChange}
        value={form?.phone ?? ""}
      />

      <TextInput
        disabled={true}
        id="birthDate"
        name="birthDate"
        label="تاريخ الميلاد"
        placeholder="تاريخ الميلاد"
        onChange={onInputChange}
        value={form?.birthDate ? formatDate(form.birthDate) : ""}
      />

      <TextInput
        disabled={true}
        id="age"
        name="age"
        label="السنّ"
        placeholder="السنّ"
        onChange={onInputChange}
        value={form?.age ?? ""}
      />

      <SelectInput
        disabled={true}
        id="gender"
        name="gender"
        label="الجنس"
        options={[
          { value: "ذكر", label: "ذكر" },
          { value: "أنثي", label: "أنثي" },
        ]}
        onChange={onInputChange}
        value={form?.gender ?? ""}
      />

      <SelectGovernates
        id="gov"
        name="birthGov"
        label="محافظة الميلاد"
        disabled={true}
        onInputChange={onInputChange}
        value={form?.birthGov ?? ""}
      />

      <SelectGovernates
        id="governateId"
        name="governateId"
        label="محافظة الإقامة"
        disabled={fieldsDisabled}
        onInputChange={onInputChange}
        value={form?.governateId ?? ""}
      />

      <SelectCity
        disabled={fieldsDisabled}
        onInputChange={onInputChange}
        value={form?.cityId ?? ""}
        govId={form?.governateId ?? ""}
      />

      <TextInput
        disabled={fieldsDisabled}
        id="destrict"
        name="destrict"
        label="المنطقة / الحيّ"
        placeholder="المنطقة / الحيّ"
        onChange={onInputChange}
        value={form?.destrictId ?? ""}
      />

      <div className="md:col-span-2 xl:col-span-3">
        <Button disabled={fieldsDisabled}>إضافة</Button>
      </div>
    </Form>
  );
};

export default AddIndigentForm;
