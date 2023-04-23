<script setup lang="ts">
import type Restaurant from "@/classes/restaurant";
import { modalInject } from "@/components";
import useDebounce from "@/composables/use-debounce";
import { useGetRestaurantsDataQuery } from "@/request";
import { useSearchTarget } from "@/store/use-search-target";
import { ref, watchEffect } from "vue";
import {
  RestaurantsCreateButton,
  RestaurantsSearchInput,
  RestaurantsSearchResults,
} from ".";

const emit = defineEmits<{
  (e: "toNextPage"): void;
}>();

const searchTarget = useSearchTarget();
const searchResult = ref<Restaurant[]>();
const handleCreateRestaurantClick = () => {
  emit("toNextPage");
};

const { data: restaurantsData } = useGetRestaurantsDataQuery();
const search = (target: string) => {
  if (!target) {
    searchResult.value = [];
    return;
  }

  const result = restaurantsData.value?.filter((restaurant) => {
    return restaurant.meta.name.includes(target);
  });

  searchResult.value = result;
};

useDebounce(searchTarget, search, 0);

const { isModalOpened } = modalInject();

watchEffect(() => {
  if (!isModalOpened.value) {
    searchTarget.value = "";
  }
});
</script>

<template>
  <div flex-1 flex flex-col>
    <RestaurantsSearchInput v-model="searchTarget" />
    <p v-if="!searchTarget" flex-1 flex items-center justify-center>
      검색어를 입력해주세요
    </p>
    <template v-else>
      <RestaurantsSearchResults w-full :data="searchResult ?? []" />
      <RestaurantsCreateButton
        type="button"
        @click="handleCreateRestaurantClick"
      />
    </template>
  </div>
</template>

<style scoped>
.restaurant-search-enter-active,
.restaurant-search-leave-active {
  transition: all 0.2s ease-in-out;
}

.restaurant-search-enter-from,
.restaurant-search-leave-to {
  transform: translate(100px);
  opacity: 0;
}
</style>
