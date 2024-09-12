import { loadingActions } from "@/redux/slices/loadingSlice";
import { useAppDispatch } from "@/redux/store";
import { insertGroup } from "@/services/groupServices";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import TextFieldController from "../ui/forms-components/TextFieldController";

const CreateGroupForm = () => {
  const dispatch = useAppDispatch();

  const form = useForm({
    defaultValues: {
      group_name: "",
      description: "",
    },
  });
  const { control, handleSubmit, watch, reset, formState } = form;
  const { errors } = formState;
  const values = watch();

  const onSubmit = async () => {
    dispatch(loadingActions.startLoading());
    try {
      await insertGroup(values);
    } catch (error) {
      console.error(error);
    }
    dispatch(loadingActions.stopLoading());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative grid gap-x-5 gap-y-3 grid-cols-1">
      <TextFieldController
        name="group_name"
        control={control}
        label="إسم المجموعة"
        errorMessage={errors.group_name?.message}
        rules={{
          required: { value: true, message: "قم بإدخال إسم المجموعة" },
        }}
      />

      <TextFieldController
        name="description"
        control={control}
        label="وصف المجموعة"
        errorMessage={errors.description?.message}
        rules={{
          required: { value: true, message: "قم بإدخال وصف للمجموعة" },
        }}
      />

      <Button type="submit">حفظ</Button>
    </form>
  );
};

export default CreateGroupForm;
