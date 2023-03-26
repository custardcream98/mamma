<script setup lang="ts">
import BackhandIndexPointingUp from "@/assets/images/backhand-index-pointing-up.webp";
import { useRestaurantMetaData } from "@/composables";
import useRandomlyPickedRestaurantRouter from "@/composables/use-randomly-picked-restaurant-router";
import { MainButton, MainButtonBoldText } from "./MainButton";
import ResultTable from "./ResultTable.vue";
import { RoundedBadgeItem, RoundedBadgeWrapper } from "./RoundedBadge";
import SmallInfoText from "./SmallInfoText.vue";

const { restaurantMetaData } = useRestaurantMetaData();
const { pickAndRouteToRandomRestaurant } = useRandomlyPickedRestaurantRouter();
</script>

<template>
  <section v-if="restaurantMetaData">
    <h2 sr-only>랜덤 선택 결과</h2>
    <MainButton class="main-button" @click="pickAndRouteToRandomRestaurant">
      <template #first-line>
        <MainButtonBoldText class="hoverblue">{{
          restaurantMetaData.name
        }}</MainButtonBoldText
        >에서
      </template>
      <template #second-line>
        <MainButtonBoldText class="hoverblue">{{
          restaurantMetaData.menu
        }}</MainButtonBoldText>
        어때요?
      </template>
    </MainButton>
    <SmallInfoText flex items-center
      ><img w-18px h-18px mr-3px :src="BackhandIndexPointingUp" alt="" /> 다시
      돌리려면 터치하세요!</SmallInfoText
    >
    <RoundedBadgeWrapper as="ul" v-if="restaurantMetaData.tags.length !== 0">
      <RoundedBadgeItem v-for="tag of restaurantMetaData.tags" :key="tag">
        {{ tag }}
      </RoundedBadgeItem>
    </RoundedBadgeWrapper>
    <ResultTable
      :type="restaurantMetaData.type"
      :menu="restaurantMetaData.menu"
      :price="restaurantMetaData.price"
      :location="restaurantMetaData.location"
    />
  </section>
</template>

<style scoped>
.hoverblue {
  transition: all 0.3s ease-in-out;
}

.main-button:hover .hoverblue {
  color: #204ff5;
}
</style>
