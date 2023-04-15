<script setup lang="ts">
import type Restaurant from "@/classes/restaurant";
import { RestaurantsSearchResultsItem } from ".";
defineProps<{
  searchTarget: string;
  data: Restaurant[];
}>();
</script>

<template>
  <ul>
    <li v-for="{ meta } of data">
      <RestaurantsSearchResultsItem
        py-8px
        b-b-1
        transition-colors
        hover:bg-wavveBlue_100
        :searchTarget="searchTarget"
        :restaurantId="meta.id"
        :restaurantName="meta.name"
        :restarurantRating="meta.ratingAvg"
      />
    </li>
    <!-- <li py-8px transition-colors hover:bg-wavveBlue_100>
      "{{ searchTarget }}" 식당 최초로 등록하기
    </li> -->
  </ul>
</template>
