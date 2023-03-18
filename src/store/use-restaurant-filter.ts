import { RESTAURANT_TYPES } from "@/constants/data";
import type { RestaurantType } from "@/types/data";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useRestaurantFilterStore = defineStore("restaurant-filter", () => {
  const filter = ref<RestaurantType[]>([...RESTAURANT_TYPES]);

  const addFilter = (type: RestaurantType) => {
    filter.value.push(type);
  };
  const removeFilter = (type: RestaurantType) => {
    filter.value = filter.value.filter((t) => t !== type);
  };
  const filterText = computed(() => {
    if (filter.value.length === RESTAURANT_TYPES.length) {
      return "전체";
    }

    if (filter.value.length <= 2) {
      return filter.value.join(", ");
    }

    return filter.value[0] + " 외 " + (filter.value.length - 1) + "개";
  });

  return {
    filter,
    filterText,
    addFilter,
    removeFilter,
  };
});
