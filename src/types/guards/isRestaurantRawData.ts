import { SHEET_KEYS } from "@/constants/data";
import type { RestaurantRawData } from "../data";

const isRestaurantRawData = (data: unknown): data is RestaurantRawData => {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const isValidData = SHEET_KEYS.every((KEY) => KEY in data);

  return isValidData;
};

export default isRestaurantRawData;
