<script lang="ts" setup>
import BackhandIndexPointingUp from "@/assets/images/backhand-index-pointing-up.webp";
import {
  LoadingErrorSuspense,
  ResultButton,
  ResultMapLink,
  ResultTable,
  ReviewListSection,
  ReviewSection,
  RoundedBadgeItem,
  RoundedBadgeWrapper,
} from "@/components";
import {
  useRandomlyPickedRestaurantRouter,
  useRestaurantMetaData,
} from "@/composables";
import { useSelectedRestaurantIdStore } from "@/store";
import isString from "@/types/guards/isString";
import { watchEffect } from "vue";

const props = defineProps<{
  restaurantId: string;
}>();
const restaurantIdStore = useSelectedRestaurantIdStore();

watchEffect(() => {
  if (!isString(props.restaurantId)) {
    return;
  }
  restaurantIdStore.setSelectedRestaurantId(Number(props.restaurantId));
});

const { isError, error, isLoadingRestaurantMetaData, restaurantMetaData } =
  useRestaurantMetaData();

const { pickAndRouteToRandomRestaurant } = useRandomlyPickedRestaurantRouter();
</script>

<template>
  <div>
    <LoadingErrorSuspense
      :error="error"
      :is-error="isError"
      :is-loading="isLoadingRestaurantMetaData"
    >
      <section>
        <h2 sr-only>랜덤 선택 결과</h2>
        <ResultButton
          @click="pickAndRouteToRandomRestaurant"
          :name="restaurantMetaData?.name"
          :menu="restaurantMetaData?.menu"
        />
        <p flex items-center text-wavveGray>
          <img w-18px h-18px mr-3px :src="BackhandIndexPointingUp" alt="" />
          다시 돌리려면 터치하세요!
        </p>
        <RoundedBadgeWrapper
          mt-16px
          as="ul"
          v-if="
            restaurantMetaData?.tags && restaurantMetaData?.tags.length !== 0
          "
        >
          <RoundedBadgeItem v-for="tag of restaurantMetaData.tags" :key="tag">
            {{ tag }}
          </RoundedBadgeItem>
        </RoundedBadgeWrapper>
        <ResultTable
          mt-16px
          :type="restaurantMetaData?.type"
          :menu="restaurantMetaData?.menu"
          :price="restaurantMetaData?.price"
          :location="restaurantMetaData?.location"
        />
        <ResultMapLink mt-20px :name="restaurantMetaData?.name" />
      </section>
      <ReviewListSection />
      <ReviewSection />
    </LoadingErrorSuspense>
  </div>
</template>
