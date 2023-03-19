<template>
  <RoundedBadgeWrapper as="fieldset">
    <RoundedBadgeCheckbox
      v-for="category of RESTAURANT_TYPES"
      :key="category"
      :default-checked="store.filter.includes(category)"
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
import { useRestaurantFilterStore } from "@/store/use-restaurant-filter";
import isRestaurantType from "@/types/guards/isRestaurantType";
import type { CheckboxChangeEvent } from "./RoundedBadge/RoundedBadgeCheckbox.vue";

const store = useRestaurantFilterStore();

const handleFilterChange = ({ checked, value }: CheckboxChangeEvent) => {
  if (!isRestaurantType(value)) {
    throw new Error("Invalid restaurant type");
  }

  if (checked) {
    store.addFilter(value);
  } else {
    store.removeFilter(value);
  }
};
</script>
