<template>
  <RoundedBadgeWrapper as="fieldset">
    <legend sr-only>레스토랑 타입</legend>
    <RoundedBadgeCheckbox
      v-for="category of RESTAURANT_TYPES"
      :key="category"
      :default-checked="typeFilterStore.filter.includes(category)"
      :value="category"
      @checkbox-change="handleFilterChange"
      >{{ category }}</RoundedBadgeCheckbox
    >
  </RoundedBadgeWrapper>
</template>

<script lang="ts" setup>
import {
  RoundedBadgeCheckbox,
  RoundedBadgeWrapper,
} from "@/components/RoundedBadge";
import { RESTAURANT_TYPES } from "@/constants/data";
import { useRestaurantTypeFilterStore } from "@/store/use-restaurant-type-filter";
import isRestaurantType from "@/types/guards/isRestaurantType";
import type { CheckboxChangeEvent } from "./RoundedBadge/RoundedBadgeCheckbox.vue";

const typeFilterStore = useRestaurantTypeFilterStore();

const handleFilterChange = ({ checked, value }: CheckboxChangeEvent) => {
  if (!isRestaurantType(value)) {
    throw new Error("Invalid restaurant type");
  }

  if (checked) {
    typeFilterStore.addFilter(value);
  } else {
    typeFilterStore.removeFilter(value);
  }
};
</script>
