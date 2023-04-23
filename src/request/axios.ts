import { AXIOS_CONSTANTS } from "@/constants/request";
import axios from "axios";

const BASE_URL = AXIOS_CONSTANTS.BASE_URL;

const mammaApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export { mammaApi };
