<script setup lang="ts">
import { useRestaurantMetaData } from "@/composables";
import { BigButton } from ".";

const { restaurantMetaData } = useRestaurantMetaData();
</script>

<template>
  <BigButton
    v-if="restaurantMetaData"
    as="a"
    target="_blank"
    :href="`https://map.naver.com/v5/search/${encodeURI(
      `여의도 ${restaurantMetaData.name}`,
    )}`"
    >지도로 보기</BigButton
  >
</template>
