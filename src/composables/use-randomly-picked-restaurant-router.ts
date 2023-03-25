import { ROUTE_NAME } from "@/constants/route";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { useRestaurantFilterStore } from "@/store/use-restaurant-filter";
import { useRestaurantTagFilterStore } from "@/store/use-tag-filter";
import { randomlyPickInArray } from "@/utils/array";
import { useRouter } from "vue-router";

const useRandomlyPickedRestaurantRouter = () => {
  const router = useRouter();

  const store = useRestaurantFilterStore();
  const tagStore = useRestaurantTagFilterStore();

  const {
    data: restaurants,
    isLoading,
    isError,
    error,
  } = useGetRestaurantsDataQuery();

  const pickAndRouteToRandomRestaurant = () => {
    if (!restaurants.value) {
      return;
    }

    if (!store.filter.length) {
      return alert("하나 이상의 카테고리를 선택해주세요.");
    }

    if (!tagStore.tagFilter.length) {
      return alert("하나 이상의 식사 시간을 선택해주세요.");
    }

    const filteredRestaurants = restaurants.value
      .filter((data) => store.filter.includes(data.meta.type))
      .filter((data) =>
        data.meta.tags.some((tag) => tagStore.tagFilter.includes(tag)),
      );

    if (!filteredRestaurants.length) {
      return alert("조건에 맞는 식당이 없습니다 🥲🥲");
    }

    const _pickedRestaurant = randomlyPickInArray(filteredRestaurants);

    router.push({
      name: ROUTE_NAME.RESULT,
      params: {
        restaurantId: _pickedRestaurant.id,
      },
    });
  };

  return {
    pickAndRouteToRandomRestaurant,
    isRestaurantDataLoading: isLoading,
    isRestaurantDataError: isError,
    restaurantDataError: error,
    store,
    tagStore,
  };
};

export default useRandomlyPickedRestaurantRouter;
