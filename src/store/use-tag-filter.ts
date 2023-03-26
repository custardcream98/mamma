import { RESTAURANT_TAGS } from "@/constants/data";
import type { RestaurantTags } from "@/types/data";
import { sortArrayInConstArrayOrder } from "@/utils/array";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";

const useRestaurantTagFilterStore = defineStore("restaurant-tag-filter", () => {
  const tagFilter = ref<RestaurantTags[]>([...RESTAURANT_TAGS]);

  const sortFilter = () => {
    tagFilter.value = sortArrayInConstArrayOrder(
      RESTAURANT_TAGS,
      tagFilter.value,
    );
  };

  const addFilter = (type: RestaurantTags) => {
    tagFilter.value.push(type);
    sortFilter();
  };
  const removeFilter = (type: RestaurantTags) => {
    tagFilter.value = tagFilter.value.filter((t) => t !== type);
    sortFilter();
  };
  const tagFilterText = computed(() => {
    if (tagFilter.value.length === RESTAURANT_TAGS.length) {
      return "전체";
    }

    if (tagFilter.value.length <= 2) {
      return tagFilter.value.join(", ");
    }

    return tagFilter.value[0] + " 외 " + (tagFilter.value.length - 1) + "개";
  });

  return {
    tagFilter,
    tagFilterText,
    addFilter,
    removeFilter,
  };
});

const useRestaurantTagFilterText = () => {
  const store = useRestaurantTagFilterStore();
  const { tagFilterText } = storeToRefs(store);

  return tagFilterText;
};

export { useRestaurantTagFilterStore, useRestaurantTagFilterText };
