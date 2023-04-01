<script lang="ts" setup>
import { NaverMapButton } from "@/components/Button";
import LoadingErrorSuspense from "@/components/LoadingErrorSuspense.vue";
import { RateForm } from "@/components/RateForm";
import ResultDisplay from "@/components/ResultDisplay.vue";
import { ReviewDisplay } from "@/components/Review";
import { useRestaurantMetaData } from "@/composables";
import { useAuthStore } from "@/store/use-auth";
import { useSelectedRestaurantIdStore } from "@/store/use-selected-restaurant-id";
import isString from "@/types/guards/isString";
import { toRefs, watchEffect } from "vue";

const props = defineProps<{
  restaurantId: string;
}>();
const { restaurantId } = toRefs(props);
const store = useSelectedRestaurantIdStore();
const authStore = useAuthStore();

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
      <section v-if="authStore.auth">
        <h2 sr-only>별점 남기기</h2>
        <RateForm />
      </section>
    </LoadingErrorSuspense>
  </div>
</template>
