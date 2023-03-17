<script lang="ts" setup>
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { MainButton, MainButtonBoldText } from "@/components/MainButton";
import { RoundedBadgeEm } from "@/components/RoundedBadge";
import SmallInfoTextVue from "@/components/SmallInfoText.vue";
import { useRestaurantMetaData, useRouteTo } from "@/composables";
import isString from "@/types/guards/isString";
import { computed, watchEffect } from "vue";

type Props = {
  restaurantId: string;
};

const props = defineProps<Props>();
const { routeTo: backToHome } = useRouteTo("HOME");

const restaurantId = computed(() => {
  if (isString(props.restaurantId)) return parseInt(props.restaurantId);
  backToHome();
});

const { isLoadingRestaurantMetaData, restaurantMetaData, isError } =
  useRestaurantMetaData(restaurantId);

watchEffect(() => {
  if (isError.value) backToHome();
});
</script>

<template>
  <template v-if="!isLoadingRestaurantMetaData && restaurantMetaData">
    <MainButton @click="backToHome">
      <template #first-line>
        <MainButtonBoldText>{{ restaurantMetaData.name }}</MainButtonBoldText
        >에서
      </template>
      <template #second-line>
        <MainButtonBoldText>{{ restaurantMetaData.menu }}</MainButtonBoldText>
        어때요?
      </template>
    </MainButton>
    <SmallInfoTextVue>👆 다시 돌리려면 터치하세요!</SmallInfoTextVue>
    <RoundedBadgeEm>No. {{ restaurantMetaData.id }}</RoundedBadgeEm>
  </template>
  <template v-else>
    <LoadingIndicator />
  </template>
</template>
