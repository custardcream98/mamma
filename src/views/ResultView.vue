<script lang="ts" setup>
import BigButton from "@/components/BigButton.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { MainButton, MainButtonBoldText } from "@/components/MainButton";
import ResultTable from "@/components/ResultTable.vue";
import { ReviewDisplay, ReviewStar } from "@/components/Review";
import {
  RoundedBadgeItem,
  RoundedBadgeWrapper,
} from "@/components/RoundedBadge";
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
  <div>
    <template v-if="!isLoadingRestaurantMetaData && restaurantMetaData">
      <section>
        <h2 sr-only>랜덤 선택 결과</h2>
        <MainButton @click="backToHome">
          <template #first-line>
            <MainButtonBoldText>{{
              restaurantMetaData.name
            }}</MainButtonBoldText
            >에서
          </template>
          <template #second-line>
            <MainButtonBoldText>{{
              restaurantMetaData.menu
            }}</MainButtonBoldText>
            어때요?
          </template>
        </MainButton>
        <SmallInfoTextVue>👆 다시 돌리려면 터치하세요!</SmallInfoTextVue>
        <RoundedBadgeWrapper
          as="ul"
          v-if="restaurantMetaData.tags.length !== 0"
        >
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
      <ReviewDisplay
        v-if="restaurantMetaData.review && restaurantMetaData.reviewer"
        :review="restaurantMetaData.review"
        :reviewer="restaurantMetaData.reviewer"
      >
        <template #rating v-if="restaurantMetaData.rating">
          <ReviewStar :rating="restaurantMetaData.rating" />
        </template>
      </ReviewDisplay>
      <BigButton
        mt-30px
        as="a"
        target="_blank"
        :href="`https://map.naver.com/v5/search/${encodeURI(
          `여의도 ${restaurantMetaData.name}`,
        )}`"
        >지도로 보기</BigButton
      >
    </template>
    <template v-else>
      <LoadingIndicator />
    </template>
  </div>
</template>
