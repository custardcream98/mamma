import useFilter from "@/composables/use-filter";
import { RESTAURANT_TAGS } from "@/constants/data";
import { defineStore, storeToRefs } from "pinia";
import { computed } from "vue";

const useRestaurantTagFilterStore = defineStore("restaurant-tag-filter", () => {
  const { filter, addFilter, removeFilter } = useFilter({
    initialFilter: [...RESTAURANT_TAGS],
    filterOrder: RESTAURANT_TAGS,
  });

  const filterText = computed(() => {
    if (filter.value.length === RESTAURANT_TAGS.length) {
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

const useRestaurantTagFilterText = () => {
  const store = useRestaurantTagFilterStore();
  const { filterText } = storeToRefs(store);

  return filterText;
};

export { useRestaurantTagFilterStore, useRestaurantTagFilterText };
