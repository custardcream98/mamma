<script lang="ts" setup>
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { MainButton, MainButtonBoldText } from "@/components/MainButton";
import ResultTable from "@/components/ResultTable.vue";
import { ReviewDisplay, ReviewStar } from "@/components/Review";
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

const { isError, isLoadingRestaurantMetaData, restaurantMetaData } =
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
    <RoundedBadgeEm mt-16px>No. {{ restaurantMetaData.id }}</RoundedBadgeEm>
    <ResultTable
      :type="restaurantMetaData.type"
      :rating="restaurantMetaData.rating"
      :menu="restaurantMetaData.menu"
      :price="restaurantMetaData.price"
      :location="restaurantMetaData.location"
    />
    <ReviewDisplay
      :review="restaurantMetaData.review"
      :reviewer="restaurantMetaData.reviewer"
    >
      <template #rating>
        <ReviewStar :rating="restaurantMetaData.rating" />
      </template>
    </ReviewDisplay>
  </template>
  <template v-else>
    <LoadingIndicator />
  </template>
</template>
