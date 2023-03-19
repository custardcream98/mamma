import Restaurant from "@/classes/restaurant";
import isRestaurantRawData from "@/types/guards/isRestaurantRawData";
import { getSheetData } from "./get-sheet-data";

const getRestaurantsData = async () => {
  const sheetResponse = await getSheetData();

  const restaurants = sheetResponse.results.map((data) => {
    if (!isRestaurantRawData(data)) {
      throw new Error("Invalid data from Google Sheet");
    }

    return new Restaurant(data);
  });

  console.log(sheetResponse);

  return restaurants;
};

export default getRestaurantsData;
