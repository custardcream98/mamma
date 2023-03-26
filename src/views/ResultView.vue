<script lang="ts" setup>
import LoadingErrorSuspense from "@/components/LoadingErrorSuspense.vue";
import NaverMapButton from "@/components/NaverMapButton.vue";
import ResultDisplay from "@/components/ResultDisplay.vue";
import { ReviewDisplay } from "@/components/Review";
import { useRestaurantMetaData } from "@/composables";
import { useSelectedRestaurantIdStore } from "@/store/use-selected-restaurant-id";
import isString from "@/types/guards/isString";
import { toRefs, watchEffect } from "vue";

const props = defineProps<{
  restaurantId: string;
}>();
const { restaurantId } = toRefs(props);
const store = useSelectedRestaurantIdStore();

watchEffect(() => {
  if (!isString(restaurantId.value)) {
    return;
  }
  store.setSelectedRestaurantId(Number(restaurantId.value));
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
      <NaverMapButton />
      <ReviewDisplay />
    </LoadingErrorSuspense>
  </div>
</template>
