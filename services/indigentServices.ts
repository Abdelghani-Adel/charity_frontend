import IApiRes_GetAllIndigents from "@/types/api_responses/IApiRes_GetAllIndigents";
import apiClient from "./clients";
import { AxiosResponse } from "axios";
import IApiRes_Global from "@/types/api_responses/IApiRes_Global";

export async function getAllIndigents() {
  let data: IApiRes_GetAllIndigents | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetAllIndigents>> = await apiClient.get(
      "/api/indigent"
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
      console.log(data);
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
}

export const getIndigentData = async (nid: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.get("/data/indigent.json");
    const allData = response.data;

    // const list: Partial<IIndigentInfo>[] = indigentList;

    data = allData.find((item: IIndigentInfo) => item.nid === nid);

    if (!data) {
      error = "Error: No data found for the provided NID";
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
