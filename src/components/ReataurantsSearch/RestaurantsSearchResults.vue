<script setup lang="ts">
import type Restaurant from "@/classes/restaurant";
import { RestaurantsSearchResultsItem } from ".";
defineProps<{
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
        :restaurantId="meta.id"
        :restaurantName="meta.name"
        :restarurantRating="meta.ratingAvg"
        :key="meta.id"
      />
    </li>
  </ul>
</template>
