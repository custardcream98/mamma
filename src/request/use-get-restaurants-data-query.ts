import { useQuery } from "@tanstack/vue-query";
import getRestaurantsData from "./get-restaurants-data";

const queryKey = ["restaurants"];

export const useGetRestaurantsDataQuery = () => {
  return useQuery(queryKey, getRestaurantsData, {
    staleTime: 1000 * 60 * 60 * 24,
  });
};
