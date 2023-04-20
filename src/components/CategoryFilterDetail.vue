<script lang="ts" setup>
import CategoryFilter from "@/components/CategoryFilter.vue";
import { DetailWrapper } from "@/components/Detail";
import { useRestaurantFilterText } from "@/store/use-restaurant-filter";

const filterText = useRestaurantFilterText();
</script>

<template>
  <DetailWrapper>
    <template #summary
      >카테고리
      <strong text-wavveLightBlue font-500>
        {{ filterText }}
      </strong>
    </template>
    <template #detail>
      <CategoryFilter mt-16px />
    </template>
  </DetailWrapper>
</template>
