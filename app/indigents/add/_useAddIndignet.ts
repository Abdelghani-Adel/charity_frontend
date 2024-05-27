import { getIndigentData } from "@/services/indigentServices";
import { getCities, getGovernates } from "@/services/infoServices";
import { generateSelectOptions } from "@/utils/generateSelectOptions";
import { useEffect, useState } from "react";

export const useAddIndigent = () => {
  const [nid, setNid] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [governateId, setGovernateId] = useState("");
  const [cityId, setCityId] = useState("");
  const [destricteId, setDestricteId] = useState("");
  const [fieldsActivated, setFieldsActivated] = useState<boolean>(false);
  const [existIndigent, setExistIndigent] = useState<IIndigentInfo | null>();

  const onNidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNid(value);

    const { data } = await getIndigentData(value);
    const indigentInfo: IIndigentInfo = data;
    setExistIndigent(indigentInfo);
  };

  useEffect(() => {
    if (nid.length === 14) {
      setFieldsActivated(true);
    } else {
      setFieldsActivated(false);
    }
  }, [nid]);

  useEffect(() => {
    if (existIndigent) {
      setName(existIndigent.name);
      setPhone(existIndigent.phone);
      setGovernateId(existIndigent.governateId);
      setCityId(existIndigent.cityId);
      setDestricteId(existIndigent.destrictId);
    } else {
      setName("");
      setPhone("");
      setGovernateId("");
      setCityId("");
      setDestricteId("");
    }
  }, [existIndigent]);

  const [governates, setGovernates] = useState<ISelectOption[]>([{ value: "", label: "" }]);
  const [cities, setCities] = useState<ISelectOption[]>([{ value: "", label: "" }]);

  useEffect(() => {
    const fetchGoverntes = async () => {
      const { data, error } = await getGovernates();
      const options = generateSelectOptions(data.governates, "id", "name");
      setGovernates(options);
    };

    fetchGoverntes();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      const { data, error } = await getCities(governateId);
      const options = generateSelectOptions(data.cities, "id", "name");
      setCities(options);
    };

    fetchCities();
  }, [governateId]);
};
