import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import { IApiRes_GetListOptions } from "@/types/api_responses/IApiRes_GetListOptions";

type SelectControllerProps<T extends FieldValues, K extends Path<T>> = {
  name: K;
  control: Control<T>;
  label: string;
  options: IApiRes_GetListOptions[] | null;
  rules?: RegisterOptions<T, K>;
  errorMessage?: string;
};

const SelectController = <T extends FieldValues, K extends Path<T>>({
  name,
  control,
  label,
  options,
  rules,
  errorMessage,
}: SelectControllerProps<T, K>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          options={options || []}
          getOptionLabel={(option) => option.label}
          onChange={(_, newValue) => onChange(newValue ? newValue.value : "")}
          value={options?.find((option) => option.value === value) || null}
          isOptionEqualToValue={(option, val) => option.value === val.value}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error ? errorMessage || "Error" : ""}
            />
          )}
        />
      )}
    />
  );
};

export default SelectController;
