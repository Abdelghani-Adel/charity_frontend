import IApiRes_GetAllIndigents from "@/types/api_responses/IApiRes_GetAllIndigents";
import apiClient from "./clients";
import axios, { AxiosResponse } from "axios";
import IApiRes_Global from "@/types/api_responses/IApiRes_Global";
import { IApiRes_GetIndigentDetails } from "@/types/api_responses/IApiRes_GetIndigentDetails";
import { ApiReq_InsertIndigent } from "@/types/api_requests/ApiReq_InsertIndigent";
import { IApiRes_InsertIndigent } from "@/types/api_responses/IApiRes_InsertIndigent";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function insertNewIndigentService(newIndigent: Partial<ApiReq_InsertIndigent>) {
  let data: IApiRes_InsertIndigent | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_InsertIndigent>> = await apiClient.post(
      "/api/indigent",
      newIndigent
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
}

export async function getAllIndigents(token?: string | undefined | null) {
  let data: IApiRes_GetAllIndigents[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetAllIndigents[]>> = await axios.get(
      `${baseURL}/api/indigent`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
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
