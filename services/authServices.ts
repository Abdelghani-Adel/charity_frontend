import { TOKEN_NAME } from "@/assets/enums";
import IApiRes_Global from "@/types/api_responses/IApiRes_Global";
import IApiRes_UserLogin from "@/types/api_responses/IApiRes_UserLogin";
import { setCookie } from "@/utils/cookies";
import { AxiosResponse } from "axios";
import apiClient from "./clients";

export const signInService = async (username: string, password: string) => {
  let data: IApiRes_UserLogin | null = null;
  let error: string | null = null;

  try {
    const response: AxiosResponse<IApiRes_Global<IApiRes_UserLogin>> = await apiClient.post(
      "api/auth/login",
      {
        username: username,
        password: password,
      }
    );

    if (response.data.success && response.data.data) {
      console.log("data in: " + JSON.stringify(response.data));
      data = response.data.data;
      setCookie(TOKEN_NAME, data.token, data.tokenExpiration);
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  console.log("data: " + data);
  return { data, error };
};
