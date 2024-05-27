import apiClient from "./clients";

export const getGovernates = async () => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/gov.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};

export const getCities = async (govId: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/cities.json");
    data = response.data;
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
