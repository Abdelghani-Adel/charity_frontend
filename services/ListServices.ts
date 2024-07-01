import { IApiRes_GetListOptions } from "@/types/api_responses/IApiRes_GetListOptions";
import IApiRes_Global from "@/types/api_responses/IApiRes_Global";
import { AxiosResponse } from "axios";
import apiClient from "./clients";

export async function getIndigentListOptions() {
  return getOptionsList("/api/options-list/indigent");
}

export async function getAidTypesListOptions() {
  return getOptionsList("/api/options-list/aid-type");
}

export async function getIndigencyTypesListOptions() {
  return getOptionsList("/api/options-list/indigency-type");
}

async function getOptionsList(endPoint: string) {
  let data: IApiRes_GetListOptions[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetListOptions[]>> = await apiClient.get(
      endPoint
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
}
