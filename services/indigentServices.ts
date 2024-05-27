import apiClient from "./clients";

export const getIndigentData = async (nid: string) => {
  let data = null;
  let error = null;

  try {
    if (nid === "12345678912345" && nid.length === 14) {
      const response = await apiClient.get("/data/indigent.json");
      data = response.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
