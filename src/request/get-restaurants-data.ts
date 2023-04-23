import Restaurant from "@/classes/restaurant";
import isRestaurantRawData from "@/types/guards/isRestaurantRawData";
import { getRawData } from "./get-raw-data";

const getRestaurantsData = async () => {
  const rawData = await getRawData();

  const restaurants = rawData.map((data) => {
    if (!isRestaurantRawData(data)) {
      throw new Error("Invalid data from Google Sheet");
    }

    return new Restaurant(data);
  });

  return restaurants;
};

export { getRestaurantsData };
