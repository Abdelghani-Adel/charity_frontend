import { TOKEN_NAME } from "@/assets/enums";
import { getCookie } from "@/utils/cookies";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = getCookie(TOKEN_NAME);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
