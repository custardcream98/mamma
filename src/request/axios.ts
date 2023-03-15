import { AXIOS_CONSTANTS } from "@/constants/request";
import axios, { type InternalAxiosRequestConfig } from "axios";

const googleSheetApi = axios.create({
  baseURL: AXIOS_CONSTANTS.BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const apiKeyInterceptor = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  config.params = {
    apiKey: import.meta.env.VITE_SHEETSON_API_KEY,
    spreadsheetId: import.meta.env.VITE_SPREAD_SHEET_ID,
    limit: 100,
  };

  return config;
};
googleSheetApi.interceptors.request.use(apiKeyInterceptor);

export { googleSheetApi };
