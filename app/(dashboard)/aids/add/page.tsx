"use client";
import SelectController from "@/components/ui/forms-components/SelectController";
import TextFieldController from "@/components/ui/forms-components/TextFieldController";
import PageTitle from "@/components/ui/PageTitle";
import { getAidTypesListOptions, getIndigentListOptions } from "@/services/ListServices";
import { ApiReq_insertAid } from "@/types/api_requests/ApiReq_InsertAid";
import { IApiRes_GetListOptions } from "@/types/api_responses/IApiRes_GetListOptions";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { loadingActions } from "@/redux/slices/loadingSlice";
import { useDispatch } from "react-redux";
import { saveNewAidService } from "@/services/aidServices";
import { toast } from "react-toastify";

const Page = () => {
  const dispatch = useDispatch();
  const [indigentList, setIndigentList] = useState<IApiRes_GetListOptions[] | undefined>();
  const [aidType, setAidType] = useState<IApiRes_GetListOptions[] | undefined>();

  useEffect(() => {
    const fetchIndigentList = async () => {
      const { data } = await getIndigentListOptions();
      if (data) setIndigentList(data);
    };

    fetchIndigentList();

    const fetchAidTypes = async () => {
      const { data } = await getAidTypesListOptions();
      if (data) setAidType(data);
    };
    fetchAidTypes();
  }, []);

  const form = useForm<Partial<ApiReq_insertAid>>({
    defaultValues: {
      ind_id: "",
      aid_type_id: "",
      desc: "",
      isPublic: false,
    },
  });

  const { control, handleSubmit, watch, setValue, formState, reset } = form;
  const { isValid, errors } = formState;
  const values = watch();

  const onSubmit = async () => {
    dispatch(loadingActions.startLoading());
    try {
      const { data } = await saveNewAidService(values);
      if (data?.insert_aid) {
        reset();
        toast.success("تم حفظ المساعدة بنجاح!");
      }
    } catch (error) {}
    dispatch(loadingActions.stopLoading());
  };

  return (
    <div>
      <PageTitle title="إضافة مساعدة" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2 xl:grid-cols-3"
      >
        {indigentList && (
          <SelectController
            name="ind_id"
            control={control}
            label="إسم الحالة"
            errorMessage={errors.ind_id?.message}
            options={indigentList}
            rules={{ required: { value: true, message: "قم باختيار الحالة" } }}
          />
        )}

        {aidType && (
          <SelectController
            name="aid_type_id"
            control={control}
            label="نوع المساعدة"
            errorMessage={errors.aid_type_id?.message}
            options={aidType}
            rules={{ required: { value: true, message: "قم باختيار نوع المساعدة" } }}
          />
        )}

        <TextFieldController
          name="desc"
          control={control}
          label="ملاحظات"
          errorMessage={errors.desc?.message}
          rules={{ required: { value: true, message: "قم بكتابة ملاحظاتك" } }}
        />

        {aidType && (
          <SelectController
            name="isPublic"
            control={control}
            label="الرؤية من باقي الجمعيات"
            errorMessage={errors.isPublic?.message}
            options={[
              { value: "true", label: "نشر المساعدة" },
              { value: "false", label: "عدم نشر المساعدة" },
            ]}
          />
        )}
        <Button type="submit" variant="contained" color="primary">
          حفظ المساعدة
        </Button>
      </form>
    </div>
  );
};

export default Page;
