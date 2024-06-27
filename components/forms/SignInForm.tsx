import React from "react";
import { useForm } from "react-hook-form";
import TextFieldController from "../ui/forms-components/TextFieldController";
import Button from "../ui/Button";
import { signInService } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { loadingActions } from "@/redux/slices/loadingSlice";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { control, handleSubmit, watch, setError, formState } = form;
  const { errors } = formState;
  const values = watch();

  const onSubmit = async () => {
    dispatch(loadingActions.startLoading());
    try {
      const { data } = await signInService(values.username, values.password);
      console.log(data);
      if (!data) {
        setError("username", {
          type: "manual",
          message: "إسم المستخدم أو كلمة المرور غير صحيحة",
        });
        setError("password", {
          type: "manual",
          message: "إسم المستخدم أو كلمة المرور غير صحيحة",
        });
      }

      // navigate to dashboard
      router.push("/dashboard");
    } catch (error) {
      setError("username", {
        type: "manual",
        message: "خطأ في الخادم، حاول مرة أخرى لاحقًا",
      });
      setError("password", {
        type: "manual",
        message: "خطأ في الخادم، حاول مرة أخرى لاحقًا",
      });
    }
    dispatch(loadingActions.stopLoading());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative grid gap-x-5 gap-y-3 grid-cols-1">
      <TextFieldController
        name="username"
        control={control}
        label="إسم المستخدم"
        errorMessage={errors.username?.message}
        rules={{
          required: { value: true, message: "قم بإدخال إسم المستخدم" },
        }}
      />

      <TextFieldController
        name="password"
        control={control}
        label="كلمة المرور"
        errorMessage={errors.password?.message}
        rules={{
          required: { value: true, message: "قم بإدخال كلمة المرور" },
        }}
      />

      <Button type="submit">تسجيل الدخول</Button>
    </form>
  );
};

export default SignInForm;
