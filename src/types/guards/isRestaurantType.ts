import { RESTAURANT_TYPES } from "@/constants/data";
import type { RestaurantType } from "../data";

const isRestaurantType = (str: unknown): str is RestaurantType => {
  if (typeof str !== "string") {
    return false;
  }
  return (RESTAURANT_TYPES as ReadonlyArray<string>).includes(str);
};

export default isRestaurantType;
