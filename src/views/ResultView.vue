<script lang="ts" setup>
import { NaverMapButton } from "@/components/Button";
import InformToLogin from "@/components/InformToLogin.vue";
import LoadingErrorSuspense from "@/components/LoadingErrorSuspense.vue";
import { RateForm } from "@/components/RateForm";
import ResultDisplay from "@/components/ResultDisplay.vue";
import { ReviewDisplay } from "@/components/Review";
import { useRestaurantMetaData } from "@/composables";
import { useAuthStore } from "@/store/use-auth";
import { useSelectedRestaurantIdStore } from "@/store/use-selected-restaurant-id";
import isString from "@/types/guards/isString";
import { computed, toRefs, watchEffect } from "vue";

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

const { isError, error, isLoadingRestaurantMetaData, restaurantMetaData } =
  useRestaurantMetaData();

const hasUserRated = computed(() => {
  const auth = authStore.auth;
  if (!auth || !restaurantMetaData.value) {
    return false;
  }
  return restaurantMetaData.value.ratings.some(
    (rating) => rating.uid === auth.uid,
  );
});
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
      <section>
        <h2 sr-only>별점 남기기</h2>
        <RateForm v-if="authStore.auth && !hasUserRated" my-20px />
        <InformToLogin mt-40px v-else-if="!authStore.auth" />
      </section>
    </LoadingErrorSuspense>
  </div>
</template>
