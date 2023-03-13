<script lang="ts" setup>
import ResultDisplay from "@/components/ResultDisplay.vue";
import restaurantsData from "@/data/restaurant.json";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const restaurantId = computed(() =>
  parseInt(router.currentRoute.value.params.restaurantId as string),
);

const pickedRestaurant = computed(() =>
  restaurantsData.restaurants.find(
    (restaurant) => restaurant.id === restaurantId.value,
  ),
);

if (!pickedRestaurant.value) {
  router.go(-1);
}
</script>

<template>
  <ResultDisplay
    v-if="pickedRestaurant"
    :name="pickedRestaurant.name"
    :menu="pickedRestaurant.menu"
  />
</template>
