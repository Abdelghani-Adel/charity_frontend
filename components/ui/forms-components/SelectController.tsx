import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import { Controller, Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { v4 } from "uuid";
import { SelectProps } from "@mui/material/Select";
import { IApiRes_GetListOptions } from "@/types/api_responses/IApiRes_GetListOptions";

type SelectControllerProps<T extends FieldValues, K extends Path<T>> = {
  name: K;
  control: Control<T>;
  label: string;
  options: IApiRes_GetListOptions[] | null;
  rules?: RegisterOptions<T, K>;
  errorMessage?: string;
} & Omit<SelectProps, "name" | "control" | "defaultValue" | "value" | "error">;

const SelectController = <T extends FieldValues, K extends Path<T>>({
  name,
  control,
  label,
  options,
  rules,
  errorMessage,
  ...rest
}: SelectControllerProps<T, K>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={v4()}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{errorMessage || "Error"}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default SelectController;
