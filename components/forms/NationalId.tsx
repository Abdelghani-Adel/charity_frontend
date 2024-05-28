import React, { ChangeEvent } from "react";
import FormGroup from "../ui/FormGroup";
import FormLabel from "../ui/FormLabel";
import TextInput from "../ui/TextInput";

type IProps = {
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const NationalId = (props: IProps) => {
  const { value, onChange, disabled } = props;

  return (
    <FormGroup>
      <FormLabel htmlFor="nid" label="الرقم القومى" />
      <TextInput
        id="nid"
        name="nid"
        placeholder="الرقم القومي"
        disabled={!!disabled}
        onChange={onChange || (() => {})}
        value={value}
      />
    </FormGroup>
  );
};

export default NationalId;
