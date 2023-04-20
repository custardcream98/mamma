<script lang="ts" setup>
import CategoryFilter from "@/components/CategoryFilter.vue";
import { DetailWrapper } from "@/components/Detail";
import { useRestaurantTypeFilterText } from "@/store/use-restaurant-type-filter.js";

const typeFilterText = useRestaurantTypeFilterText();
</script>

<template>
  <DetailWrapper>
    <template #summary
      >카테고리
      <strong text-wavveLightBlue font-500>
        {{ typeFilterText }}
      </strong>
    </template>
    <template #detail>
      <CategoryFilter mt-16px />
    </template>
  </DetailWrapper>
</template>
