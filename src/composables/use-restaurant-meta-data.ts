import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { useSelectedRestaurantId } from "@/store/use-selected-restaurant-id";
import type { RestaurantMetaData } from "@/types/data";
import { computed } from "vue";
import useRouteTo from "./use-routeto";

const useRestaurantMetaData = () => {
  const { data, isLoading, isError, error } = useGetRestaurantsDataQuery();
  const restaurantId = useSelectedRestaurantId();
  const { routeTo: backToHome } = useRouteTo("HOME");

  const restaurantMetaData = computed<RestaurantMetaData | null>(() => {
    if (!data.value || !restaurantId.value) {
      return null;
    }

    const _pickedRestaurant = data.value.find(
      (restaurant) => restaurant.id === restaurantId.value,
    );

    if (!_pickedRestaurant) {
      backToHome();
      return null;
    }

    return _pickedRestaurant.meta;
  });

  return {
    isLoadingRestaurantMetaData: isLoading,
    restaurantMetaData,
    isError,
    error,
  };
};

export default useRestaurantMetaData;
