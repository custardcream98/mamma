import { RESTAURANT_TAGS } from "@/constants/data";
import type { RestaurantTags } from "../data";

const isRestaurantTagsType = (str: unknown): str is RestaurantTags => {
  if (typeof str !== "string") {
    return false;
  }
  return (RESTAURANT_TAGS as ReadonlyArray<string>).includes(str);
};

export default isRestaurantTagsType;
