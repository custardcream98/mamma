<script setup lang="ts">
import BackhandIndexPointingUp from "@/assets/images/backhand-index-pointing-up.webp";
import { useRestaurantMetaData } from "@/composables";
import { ResultButton } from "./Button";
import ResultTable from "./ResultTable.vue";
import { RoundedBadgeItem, RoundedBadgeWrapper } from "./RoundedBadge";
import SmallInfoText from "./SmallInfoText.vue";

const { restaurantMetaData } = useRestaurantMetaData();
</script>

<template>
  <section v-if="restaurantMetaData">
    <h2 sr-only>랜덤 선택 결과</h2>
    <ResultButton />
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
