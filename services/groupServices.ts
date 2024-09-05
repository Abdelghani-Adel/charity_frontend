import { ApiReq_InsertGroup } from "@/types/api_requests/ApiReq_InsertGroup";
import IApiRes_Global from "@/types/api_responses/IApiRes_Global";
import axios, { AxiosResponse } from "axios";
import apiClient from "./clients";
import { ApiReq_EditGroup } from "@/types/api_requests/ApiReq_EditGroup";
import { ApiReq_AddToGroup } from "@/types/api_requests/ApiReq_AddToGroup";
import { ApiReq_RemoveFromGroup } from "@/types/api_requests/ApiReq_RemoveFromGroup";
import IApiRes_GetGroupInfo from "@/types/api_responses/ApiRes_GetGroupInfo";
import IApiRes_GetOrgGroups from "@/types/api_responses/IApiRes_GetOrgGroups";
import { headers } from "next/headers";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function insertGroup(newGroup: ApiReq_InsertGroup, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<"">> = await apiClient.post(
      "/api/indigentGroups/insertGroup",
      newGroup
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't perform the action";
  }

  return { data, error };
}

export async function editGroup(newGroup: ApiReq_EditGroup, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<"">> = await apiClient.post(
      "/api/indigentGroups/editGroup",
      newGroup
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't perform the action";
  }

  return { data, error };
}

export async function addToGroup(newGroup: ApiReq_AddToGroup, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<"">> = await apiClient.post(
      "/api/indigentGroups/addToGroup",
      newGroup
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't perform the action";
  }

  return { data, error };
}

export async function removeFromGroup(newGroup: ApiReq_RemoveFromGroup, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<"">> = await apiClient.post(
      "/api/indigentGroups/removeFromGroup",
      newGroup
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't perform the action";
  }

  return { data, error };
}

export async function getGroupInfo(groupId: string, token?: string) {
  let data: IApiRes_GetGroupInfo[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetGroupInfo[]>> = await apiClient.post(
      "/api/indigentGroups/getGroupInfo",
      { groupId: groupId }
    );
    if (response.data.success && response.data.data) {
      data = response.data.data;
    }
  } catch (err) {
    error = "Error: Couldn't perform the action";
  }

  return { data, error };
}

export async function getOrgGroups(token?: string | undefined | null) {
  let data: IApiRes_GetOrgGroups | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_GetOrgGroups>> = await axios.post(
      `${baseURL}/api/indigentGroups/getOrgGroups`,
      {},
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
    error = "Error: Couldn't perform the action";
  }

  return { data, error };
}
