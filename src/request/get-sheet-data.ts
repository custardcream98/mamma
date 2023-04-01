import { useAuthStore } from "@/store/use-auth";
import isSheetResponse from "@/types/guards/isSheetResponse";
import { googleSheetApi } from "./axios";

export const getSheetData = async () => {
  const authStore = useAuthStore();

  const response = authStore.auth
    ? await googleSheetApi.get(`/`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      })
    : await googleSheetApi.get(`/`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from Google Sheet");
  }

  if (!isSheetResponse(response.data)) {
    throw new Error("Invalid data from Google Sheet");
  }

  return response.data;
};
