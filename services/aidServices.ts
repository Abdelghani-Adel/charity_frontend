import IApiRes_Global from "@/types/api_responses/IApiRes_Global";
import { IApiRes_InsertAid } from "@/types/api_responses/IApiRes_InsertAid";
import { AxiosResponse } from "axios";
import apiClient from "./clients";
import { ApiReq_insertAid } from "@/types/api_requests/ApiReq_InsertAid";

export const saveNewAidService = async (request: Partial<ApiReq_insertAid>) => {
  let data: IApiRes_InsertAid | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_InsertAid>> = await apiClient.post(
      "api/aid",
      request
    );

    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
