<script setup lang="ts">
import { useRestaurantMetaData } from "@/composables";
import useRandomlyPickedRestaurantRouter from "@/composables/use-randomly-picked-restaurant-router";
import { MainButton, MainButtonBoldText } from "./MainButton";

const { restaurantMetaData } = useRestaurantMetaData();
const { pickAndRouteToRandomRestaurant } = useRandomlyPickedRestaurantRouter();
</script>

<template>
  <MainButton
    class="main-button"
    @click="pickAndRouteToRandomRestaurant"
    v-if="restaurantMetaData"
  >
    <template #first-line>
      <span block>
        <MainButtonBoldText class="hoverblue">{{
          restaurantMetaData.name
        }}</MainButtonBoldText
        >에서
      </span>
    </template>
    <template #second-line>
      <span block>
        <MainButtonBoldText class="hoverblue">{{
          restaurantMetaData.menu
        }}</MainButtonBoldText>
        어때요?
      </span>
    </template>
  </MainButton>
</template>

<style scoped>
.hoverblue {
  transition: all 0.3s ease-in-out;
}

.main-button:hover .hoverblue {
  color: #204ff5;
}
</style>
