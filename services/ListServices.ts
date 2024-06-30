import { IApiRes_GetListOptions } from "@/types/api_responses/IApiRes_GetListOptions";
import IApiRes_Global from "@/types/api_responses/IApiRes_Global";
import { AxiosResponse } from "axios";
import apiClient from "./clients";

export async function getIndigentListOptions() {
  let data: IApiRes_GetListOptions[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetListOptions[]>> = await apiClient.get(
      "/api/lists/indigent"
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
}

export async function getAidTypesListOptions() {
  let data: IApiRes_GetListOptions[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetListOptions[]>> = await apiClient.get(
      "/api/lists/aid-type"
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
}

export async function getIndigencyTypesListOptions() {
  let data: IApiRes_GetListOptions[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetListOptions[]>> = await apiClient.get(
      "/api/lists/indigency-type"
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
}
