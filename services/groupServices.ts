import { IAddToGroupRequest } from "@/interfaces/requests/IAddToGroupRequest";
import { IEditGroupRequest } from "@/interfaces/requests/IEditGroupRequest";
import { IInsertGroupRequest } from "@/interfaces/requests/IInsertGroupRequest";
import { IRemoveFromGroupRequest } from "@/interfaces/requests/IRemoveFromGroupRequest";
import IGlobalResponse from "@/interfaces/responses/IGlobalResponse";
import { IGroupDetailsRecord } from "@/interfaces/responses/IGroupDetailsRecord";
import { IGroupListRecord } from "@/interfaces/responses/IGroupListRecord";
import axios, { AxiosResponse } from "axios";
import apiClient from "./clients";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function insertGroup(newGroup: IInsertGroupRequest, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IGlobalResponse<"">> = await apiClient.post(
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

export async function editGroup(newGroup: IEditGroupRequest, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IGlobalResponse<"">> = await apiClient.post(
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

export async function addToGroup(newGroup: IAddToGroupRequest, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IGlobalResponse<"">> = await apiClient.post(
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

export async function removeFromGroup(newGroup: IRemoveFromGroupRequest, token?: string) {
  let data = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IGlobalResponse<"">> = await apiClient.post(
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
  let data: IGroupDetailsRecord | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IGlobalResponse<IGroupDetailsRecord>> = await apiClient.post(
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
  let data: IGroupListRecord[] | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IGlobalResponse<IGroupListRecord[]>> = await axios.post(
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
