import type Restaurant from "@/classes/restaurant";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { ref, watchEffect, type Ref } from "vue";

const useRestaurantMetaData = (restaurantId: Ref<number | undefined>) => {
  const { data, isLoading, isError } = useGetRestaurantsDataQuery();
  const pickedRestaurant = ref<Restaurant | null>(null);

  watchEffect(() => {
    const restaurantsData = data.value;

    if (isLoading.value) {
      return;
    }
    if (!restaurantsData || !restaurantId.value) {
      return;
    }

    const _pickedRestaurant = restaurantsData.find(
      (restaurant) => restaurant.id === restaurantId.value,
    );
    if (!_pickedRestaurant) {
      return;
    }

    pickedRestaurant.value = _pickedRestaurant;
  });

  return {
    isLoadingRestaurantMetaData: isLoading,
    restaurantMetaData: pickedRestaurant.value?.meta,
    isError,
  };
};

export default useRestaurantMetaData;
