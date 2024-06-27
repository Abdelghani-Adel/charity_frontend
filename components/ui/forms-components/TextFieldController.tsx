import { TextField } from "@mui/material";
import { Controller, Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { v4 } from "uuid";
import { TextFieldProps } from "@mui/material/TextField";

type TextFieldControllerProps<T extends FieldValues, K extends Path<T>> = {
  name: K;
  control: Control<T>;
  label: string;
  errorMessage?: string;
  rules?: RegisterOptions<T, K>;
} & Omit<TextFieldProps, "name" | "control" | "defaultValue" | "value">;

const TextFieldController = <T extends FieldValues, K extends Path<T>>({
  name,
  control,
  label,
  errorMessage,
  rules,
  ...rest
}: TextFieldControllerProps<T, K>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <TextField
          id={v4()}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={!!error}
          helperText={error ? errorMessage || "Error" : ""}
          {...rest}
        />
      )}
    />
  );
};

export default TextFieldController;
