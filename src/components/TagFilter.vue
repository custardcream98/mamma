<template>
  <RoundedBadgeWrapper as="fieldset">
    <legend sr-only>레스토랑 태그</legend>
    <RoundedBadgeCheckbox
      v-for="tag of RESTAURANT_TAGS"
      :key="tag"
      :default-checked="tagFilterStore.filter.includes(tag)"
      :value="tag"
      @checkbox-change="handleFilterChange"
      >{{ tag }}</RoundedBadgeCheckbox
    >
  </RoundedBadgeWrapper>
</template>

<script lang="ts" setup>
import {
  RoundedBadgeCheckbox,
  RoundedBadgeWrapper,
} from "@/components/RoundedBadge";
import { RESTAURANT_TAGS } from "@/constants/data";
import { useRestaurantTagFilterStore } from "@/store/use-tag-filter";
import isRestaurantTagsType from "@/types/guards/isRestaurantTagsType";
import type { CheckboxChangeEvent } from "./RoundedBadge/RoundedBadgeCheckbox.vue";

const tagFilterStore = useRestaurantTagFilterStore();

const handleFilterChange = ({ checked, value }: CheckboxChangeEvent) => {
  if (!isRestaurantTagsType(value)) {
    throw new Error("Invalid restaurant type");
  }

  if (checked) {
    tagFilterStore.addFilter(value);
  } else {
    tagFilterStore.removeFilter(value);
  }
};
</script>
