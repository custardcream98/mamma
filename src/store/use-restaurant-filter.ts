import { FILTER_TYPE_MAP } from "@/constants/data";
import type { FilterType } from "@/types/data";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useRestaurantFilterStore = defineStore("restaurant-filter", () => {
  const filter = ref<FilterType>("all");

  const setFilter = (type: FilterType) => {
    filter.value = type;
  };
  const filterText = computed(() => {
    return FILTER_TYPE_MAP[filter.value];
  });

  return {
    filter,
    filterText,
    setFilter,
  };
});
