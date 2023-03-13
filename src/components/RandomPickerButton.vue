<script lang="ts" setup>
import restaurantsData from "@/data/restaurant.json";
import type { Restaurant } from "@/types/restaurant";
import { randomlyPickInArray } from "@/utils/object";
import { ref } from "vue";

const pickedRestaurant = ref<Restaurant | null>(null);

const handlePickerButtonClick = () => {
  const _pickedRestaurant = randomlyPickInArray(restaurantsData.restaurants);

  pickedRestaurant.value = _pickedRestaurant;
};
</script>

<template>
  <template v-if="!pickedRestaurant">
    <button @click.stop="handlePickerButtonClick">Pick!</button>
  </template>
  <template v-else>
    <div>
      <h2>{{ pickedRestaurant.name }}</h2>
      <p>{{ pickedRestaurant.menu }}</p>
    </div>
    <button @click.stop="handlePickerButtonClick">Pick again!</button>
  </template>
</template>
