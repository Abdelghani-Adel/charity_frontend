import { toast } from "react-toastify";
import apiClient from "./clients";

export const signInService = async (username: string, password: string) => {
  let data = null;
  let error = null;

  try {
    const response = await apiClient.post("api/auth/login", {
      username: username,
      password: password,
    });

    console.log(response);

    if (!response.data.success) {
      toast.error(response.data.message);
    }
  } catch (err) {
    error = "Error: Couldn't get the data";
  }

  return { data, error };
};
