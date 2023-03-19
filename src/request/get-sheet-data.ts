import isSheetResponse from "@/types/guards/isSheetResponse";
import { googleSheetApi } from "./axios";

export const getSheetData = async () => {
  const response = await googleSheetApi.get(`/`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from Google Sheet");
  }

  if (!isSheetResponse(response.data)) {
    throw new Error("Invalid data from Google Sheet");
  }

  return response.data;
};
