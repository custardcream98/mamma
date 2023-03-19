import { AXIOS_CONSTANTS } from "@/constants/request";
import axios from "axios";

const googleSheetApi = axios.create({
  baseURL: AXIOS_CONSTANTS.BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export { googleSheetApi };
