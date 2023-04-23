<script lang="ts" setup>
import { DetailWrapper } from "@/components";
import { useRestaurantTypeFilterText } from "@/store";
import CategoryFilter from "./CategoryFilter.vue";

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
