import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import type { RestaurantMetaData } from "@/types/data";
import { computed, type Ref } from "vue";

const useRestaurantMetaData = (restaurantId: Ref<number | undefined>) => {
  const { data, isLoading, isError } = useGetRestaurantsDataQuery();
  const restaurantMetaData = computed<RestaurantMetaData | null>(() => {
    if (!data.value || !restaurantId.value) {
      return null;
    }

    const _pickedRestaurant = data.value.find(
      (restaurant) => restaurant.id === restaurantId.value,
    );

    if (!_pickedRestaurant) {
      return null;
    }

    return _pickedRestaurant.meta;
  });

  return {
    isLoadingRestaurantMetaData: isLoading,
    restaurantMetaData,
    isError,
  };
};

export default useRestaurantMetaData;
