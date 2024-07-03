import { TextField } from "@mui/material";
import { Controller, Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { v4 } from "uuid";
import { TextFieldProps } from "@mui/material/TextField";

type NumberFieldControllerProps<T extends FieldValues, K extends Path<T>> = {
  name: K;
  control: Control<T>;
  label: string;
  errorMessage?: string;
  rules?: RegisterOptions<T, K>;
} & Omit<TextFieldProps, "name" | "control" | "defaultValue" | "value" | "type">;

const NumberFieldController = <T extends FieldValues, K extends Path<T>>({
  name,
  control,
  label,
  errorMessage,
  rules,
  ...rest
}: NumberFieldControllerProps<T, K>) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (
      !/[0-9]/.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight"
    ) {
      event.preventDefault();
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <TextField
          id={v4()}
          label={label}
          type="number"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={!!error}
          helperText={error ? errorMessage || "Error" : ""}
          onKeyDown={handleKeyDown}
          {...rest}
        />
      )}
    />
  );
};

export default NumberFieldController;
