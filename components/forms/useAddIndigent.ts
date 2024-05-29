import { getIndigentData } from "@/services/indigentServices";
import { pullDataFromEgyptianID, validateEgyptianNationalID } from "@/utils/egyptianID";
import React, { useEffect, useState } from "react";

export const useAddIndigent = () => {
  const [form, setForm] = useState<Partial<IIndigentInfo> | undefined | null>();
  const [fieldsDisabled, setFieldsDisabled] = useState(true);
  // Flag indicating whether an valid exists in the database NID was entered before or not.
  const [prevNIDIsInTheDB, setPrevNIDIsInTheDB] = useState(false);

  useEffect(() => {
    handleNIDChange();
  }, [form?.nid]);

  const handleNIDChange = async () => {
    const nid = form?.nid;
    if (!nid) return;

    // validate the national id.
    const nidIsValid = validateEgyptianNationalID(nid);
    if (!nidIsValid) {
      handleInvalidNID();
      return;
    }

    // Checks if the NID exists in the database.
    const { data } = await getIndigentData(nid);
    if (data) handleExistsNidInput(data);
    if (!data) handleNewNidInput();
  };

  const handleInvalidNID = () => {
    if (prevNIDIsInTheDB) {
      setForm((prev) => ({ nid: prev?.nid }));
      setPrevNIDIsInTheDB(false);
    }

    setFieldsDisabled(true);
  };

  const handleExistsNidInput = (indigentInfo: IIndigentInfo) => {
    setForm(indigentInfo);
    setFieldsDisabled(true);
    setPrevNIDIsInTheDB(true);
  };

  const handleNewNidInput = () => {
    setFieldsDisabled(false);

    const { birthDate, gender, governorate, age } = pullDataFromEgyptianID(form?.nid ?? "");
    setForm((prevData) => ({
      ...prevData,
      ["birthDate"]: birthDate ?? new Date(),
      ["gender"]: gender,
      ["birthGov"]: governorate,
      ["age"]: age,
    }));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  return {
    form,
    fieldsDisabled,
    onInputChange,
  };
};
