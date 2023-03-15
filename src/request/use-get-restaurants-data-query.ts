import { useQuery } from "@tanstack/vue-query";
import getRestaurantsData from "./get-restaurants-data";

export const useGetRestaurantsDataQuery = () => {
  return useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurantsData,
  });
};
