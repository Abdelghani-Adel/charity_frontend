import { useAppDispatch, useAppSelector } from "@/redux/store";
import { pullDataFromEgyptianID, validateEgyptianNationalID } from "@/utils/egyptianID";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SelectController from "../ui/forms-components/SelectController";
import TextFieldController from "../ui/forms-components/TextFieldController";
import { ApiReq_InsertIndigent } from "@/types/api_requests/ApiReq_InsertIndigent";
import { loadingActions } from "@/redux/slices/loadingSlice";
import { insertNewIndigentService } from "@/services/indigentServices";
import { toast } from "react-toastify";

const AddIndigentForm = () => {
  const dispatch = useAppDispatch();
  const indigencyTypeOptions = useAppSelector((state) => state.optionsLists.indigencyTypes);
  const citiesOptions = useAppSelector((state) => state.optionsLists.cities);
  const districtsOptions = useAppSelector((state) => state.optionsLists.districts);
  const governatesOptions = useAppSelector((state) => state.optionsLists.governorates);

  const form = useForm<Partial<ApiReq_InsertIndigent>>({
    defaultValues: {
      national_id: "",
      name: "",
      phone: "",
      kids: 1,
      indigency_type_id: 1,
      governorate_id: 31,
      city_id: 215,
      district_id: 11,
      address: "",
    },
  });

  const { control, handleSubmit, watch, formState, reset, setError } = form;
  const { errors } = formState;

  const values = watch();

  const onSubmit = async () => {
    dispatch(loadingActions.startLoading());
    try {
      const { data } = await insertNewIndigentService(values);
      if (data) {
        reset();
        toast.success("تم إضافة الحالة بنجاح!");
      } else {
        setError("national_id", {
          type: "manual",
          message: "رقم قومي مكرر",
        });
      }
    } catch (error) {
      console.error(error);
    }
    dispatch(loadingActions.stopLoading());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2 xl:grid-cols-3"
    >
      <TextFieldController
        name="national_id"
        control={control}
        label="الرقم القومي"
        errorMessage={errors.national_id?.message}
        rules={{
          required: { value: true, message: "قم بإدخال الرقم القومي" },
          validate: {
            isValid: (id: string | undefined) => {
              return validateEgyptianNationalID(id) || "رقم قومي غير صحيح";
            },
            // isUnique: async (id: string | undefined) => {
            //   const { data } = await getIndigentData(id ?? "");
            //   return !data || "رقم قومي مكرر";
            // },
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
        name="kids"
        control={control}
        label="عدد الأطفال"
        errorMessage={errors.kids?.message}
        rules={{ required: { value: true, message: "قم بإدخال عدد أطفال الحالة" } }}
      />

      <TextFieldController
        name="address"
        control={control}
        label="العنوان"
        errorMessage={errors.address?.message}
        rules={{ required: { value: true, message: "قم بإدخال عنوان الحالة" } }}
      />

      <SelectController
        name="indigency_type_id"
        control={control}
        label="نوع الحالة"
        errorMessage={errors.indigency_type_id?.message}
        options={indigencyTypeOptions}
        rules={{ required: { value: true, message: "قم باختيار نوع الحالة" } }}
      />

      <SelectController
        name="district_id"
        control={control}
        label="المنطقة / الحيّ"
        errorMessage={errors.district_id?.message}
        options={districtsOptions}
        rules={{ required: { value: true, message: "قم باختيار المنطقة" } }}
      />

      <SelectController
        name="city_id"
        control={control}
        label="المدينة"
        options={citiesOptions}
        disabled
      />

      <SelectController
        name="governorate_id"
        control={control}
        label="محافظة الإقامة"
        options={governatesOptions}
        disabled
      />

      {/* <SelectController
        name="birthGov"
        control={control}
        label="محافظة الميلاد"
        options={governatesOptions}
        disabled
      />

      <TextFieldController name="age" control={control} label="السن" disabled /> */}

      <Button type="submit" variant="contained" color="primary">
        حفظ
      </Button>
    </form>
  );
};

export default AddIndigentForm;
