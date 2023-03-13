<script lang="ts" setup>
import BigButton from "@/components/BigButton.vue";
import ResultDisplay from "@/components/ResultDisplay.vue";
import { PATH } from "@/constants/route";
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

const backToHome = () => {
  router.push({
    path: PATH.HOME,
  });
};

if (!pickedRestaurant.value) {
  backToHome();
}
</script>

<template>
  <ResultDisplay
    v-if="pickedRestaurant"
    :name="pickedRestaurant.name"
    :menu="pickedRestaurant.menu"
  />
  <BigButton type="button" @click="backToHome">다시 돌리기</BigButton>
</template>
