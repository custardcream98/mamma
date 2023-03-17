import { SHEET_KEYS } from "@/constants/data";
import type { RestaurantRawData } from "../data";
import isRestaurantType from "./isRestaurantType";

const isRestaurantRawData = (data: unknown): data is RestaurantRawData => {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const isValidData = SHEET_KEYS.every((KEY) => {
    if (KEY === "종류") {
      if (!(KEY in data)) {
        return false;
      }
      const val = data[KEY];
      return isRestaurantType(val);
    }

    return KEY in data;
  });

  return isValidData;
};

export default isRestaurantRawData;
