import cities from "@/public/data/cities.json";
import destricts from "@/public/data/districts.json";
import governates from "@/public/data/gov.json";
import indigencyTypes from "@/public/data/indigencyTypes.json";
import { getIndigentData } from "@/services/indigentServices";
import { pullDataFromEgyptianID, validateEgyptianNationalID } from "@/utils/egyptianID";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SelectController from "../ui/forms-components/SelectController";
import TextFieldController from "../ui/forms-components/TextFieldController";

const AddIndigentForm = () => {
  const form = useForm<Partial<IIndigentInfo>>({
    defaultValues: {
      governateId: "31",
      cityId: "01",
    },
  });

  const { control, handleSubmit, watch, setValue, formState } = form;
  const { isValid, errors } = formState;

  const values = watch();

  useEffect(() => {
    const { governorate, age } = pullDataFromEgyptianID(values.nid ?? "");
    setValue("birthGov", governorate);
    setValue("age", age);
  }, [values.nid]);

  return (
    <form
      onSubmit={handleSubmit(() => {})}
      className="relative grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2 xl:grid-cols-3"
    >
      <TextFieldController
        name="nid"
        control={control}
        label="الرقم القومي"
        errorMessage={errors.nid?.message}
        rules={{
          required: { value: true, message: "قم بإدخال الرقم القومي" },
          validate: {
            isValid: (id: string | undefined) => {
              return validateEgyptianNationalID(id) || "رقم قومي غير صحيح";
            },
            isUnique: async (id: string | undefined) => {
              const { data } = await getIndigentData(id ?? "");
              return !data || "رقم قومي مكرر";
            },
          },
        }}
      />

      <TextFieldController
        name="name"
        control={control}
        label="الإسم رباعي"
        errorMessage={errors.name?.message}
        rules={{ required: { value: true, message: "قم بإدخال إسم الحالة" } }}
      />

      <TextFieldController
        name="phone"
        control={control}
        label="رقم التليفون"
        errorMessage={errors.phone?.message}
        rules={{ required: { value: true, message: "قم بإدخال رقم تليفون الحالة" } }}
      />

      <TextFieldController
        name="address"
        control={control}
        label="العنوان"
        errorMessage={errors.address?.message}
        rules={{ required: { value: true, message: "قم بإدخال عنوان الحالة" } }}
      />

      <SelectController
        name="indigencyTypeId"
        control={control}
        label="نوع الحالة"
        errorMessage={errors.indigencyTypeId?.message}
        options={indigencyTypes}
        rules={{ required: { value: true, message: "قم باختيار نوع الحالة" } }}
      />

      <SelectController
        name="destrictId"
        control={control}
        label="المنطقة / الحيّ"
        errorMessage={errors.destrictId?.message}
        options={destricts}
        rules={{ required: { value: true, message: "قم باختيار المنطقة" } }}
      />

      <SelectController name="cityId" control={control} label="المدينة" options={cities} disabled />

      <SelectController
        name="governateId"
        control={control}
        label="محافظة الإقامة"
        options={governates}
        disabled
      />

      <SelectController
        name="birthGov"
        control={control}
        label="محافظة الميلاد"
        options={governates}
        disabled
      />

      <TextFieldController name="age" control={control} label="السن" disabled />

      <Button type="submit" variant="contained" color="primary">
        حفظ
      </Button>
    </form>
  );
};

export default AddIndigentForm;
