<script setup lang="ts">
import type Restaurant from "@/classes/restaurant";
import useDebounce from "@/composables/use-debounce";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { ref, watchEffect } from "vue";
import { RestaurantsSearchInput, RestaurantsSearchResults } from ".";
import { modalInject } from "../Modal";

const inputValue = ref<string>("");
const searchResult = ref<Restaurant[]>();
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

useDebounce(inputValue, search, 0);

const { isModalOpened } = modalInject();

watchEffect(() => {
  if (!isModalOpened.value) {
    inputValue.value = "";
  }
});
</script>

<template>
  <RestaurantsSearchInput v-model="inputValue" />
  <p v-if="!inputValue" flex-1 flex items-center justify-center>
    검색어를 입력해주세요
  </p>
  <RestaurantsSearchResults
    v-else
    w-full
    :data="searchResult ?? []"
    :searchTarget="inputValue"
  />
</template>
