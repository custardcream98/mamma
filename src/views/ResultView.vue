<script lang="ts" setup>
import { NaverMapButton } from "@/components/Button";
import LoadingErrorSuspense from "@/components/LoadingErrorSuspense.vue";
import { ResultDisplay } from "@/components/Result";
import { ReviewDisplay } from "@/components/Review";
import ReviewSection from "@/components/ReviewSection.vue";
import { useRestaurantMetaData } from "@/composables";
import { useSelectedRestaurantIdStore } from "@/store/use-selected-restaurant-id";
import isString from "@/types/guards/isString";
import { watchEffect } from "vue";

const props = defineProps<{
  restaurantId: string;
}>();
const store = useSelectedRestaurantIdStore();

watchEffect(() => {
  if (!isString(props.restaurantId)) {
    return;
  }
  store.setSelectedRestaurantId(Number(props.restaurantId));
});

const { isError, error, isLoadingRestaurantMetaData } = useRestaurantMetaData();
</script>

<template>
  <div>
    <LoadingErrorSuspense
      :error="error"
      :is-error="isError"
      :is-loading="isLoadingRestaurantMetaData"
    >
      <ResultDisplay />
      <NaverMapButton mt-20px />
      <ReviewDisplay />
      <ReviewSection />
    </LoadingErrorSuspense>
  </div>
</template>
