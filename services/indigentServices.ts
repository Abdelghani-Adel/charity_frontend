import IApiRes_GetAllIndigents from "@/types/api_responses/IApiRes_GetAllIndigents";
import apiClient from "./clients";
import { AxiosResponse } from "axios";
import IApiRes_Global from "@/types/api_responses/IApiRes_Global";
import { IApiRes_GetIndigentDetails } from "@/types/api_responses/IApiRes_GetIndigentDetails";

export async function getAllIndigents() {
  let data: IApiRes_GetAllIndigents[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetAllIndigents[]>> = await apiClient.get(
      "/api/indigent"
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
}

export const getIndigentDetails = async (id: string) => {
  let data = null;
  let error = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetIndigentDetails>> = await apiClient.get(
      `/api/indigent/${id}`
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
