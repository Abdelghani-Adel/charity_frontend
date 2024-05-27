import apiClient from "./clients";

export const getIndigentData = async (nid: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/indigent.json");
    const allData = response.data;

    data = allData.find((item: IIndigentInfo) => item.nid === nid);

    if (!data) {
      error = "Error: No data found for the provided NID";
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
