import { useFilter } from "@/composables";
import { RESTAURANT_TYPES } from "@/constants/data";
import { defineStore, storeToRefs } from "pinia";
import { computed } from "vue";

const useRestaurantTypeFilterStore = defineStore(
  "restaurant-type-filter",
  () => {
    const { filter, addFilter, removeFilter } = useFilter({
      initialFilter: [...RESTAURANT_TYPES],
      filterOrder: RESTAURANT_TYPES,
    });

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
  },
);

const useRestaurantTypeFilterText = () => {
  const store = useRestaurantTypeFilterStore();
  const { filterText } = storeToRefs(store);

  return filterText;
};

export { useRestaurantTypeFilterStore, useRestaurantTypeFilterText };
