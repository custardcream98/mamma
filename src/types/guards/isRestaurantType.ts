import { RESTAURANT_TYPES } from "@/constants/data";
import type { RestaurantType } from "../data";

const isRestaurantType = (type: unknown): type is RestaurantType => {
  if (typeof type !== "string") {
    return false;
  }
  return RESTAURANT_TYPES.includes(type as any);
};

export default isRestaurantType;
