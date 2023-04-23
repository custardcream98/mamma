import { ROUTE_NAME } from "@/constants/route";
import { useGetRestaurantsDataQuery } from "@/request";
import { useSelectedRestaurantId } from "@/store/use-selected-restaurant-id";
import type { RestaurantMetaData } from "@/types/data";
import { isArray } from "@vue/shared";
import { computed } from "vue";
import { useRouter } from "vue-router";

const useRestaurantMetaData = () => {
  const { data, isLoading, isError, error } = useGetRestaurantsDataQuery();
  const restaurantId = useSelectedRestaurantId();
  const router = useRouter();

  const restaurantMetaData = computed<RestaurantMetaData | null>(() => {
    if (isLoading.value) {
      return null;
    }

    if (!data.value || !restaurantId.value || isError.value) {
      router.push({ name: ROUTE_NAME.HOME });
      return null;
    }

    const _pickedRestaurant = data.value.find(
      (restaurant) => restaurant.id === restaurantId.value,
    );

    if (
      !_pickedRestaurant ||
      (isArray(_pickedRestaurant) && !_pickedRestaurant.length)
    ) {
      router.push({ name: ROUTE_NAME.HOME });
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
