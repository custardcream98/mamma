import type Restaurant from "@/classes/restaurant";
import { useQuery, type UseQueryOptions } from "@tanstack/vue-query";
import getRestaurantsData from "./get-restaurants-data";

const queryKey = ["restaurants"];

const queryOptions: UseQueryOptions<
  Restaurant[],
  unknown,
  Restaurant[],
  string[]
> = {
  staleTime:
    import.meta.env.NODE_ENV === "development" ? 0 : 1000 * 60 * 60 * 24,
  queryKey,
  queryFn: getRestaurantsData,
};

export const useGetRestaurantsDataQuery = () => {
  return useQuery(queryOptions);
};
