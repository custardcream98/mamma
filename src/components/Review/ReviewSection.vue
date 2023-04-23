<script setup lang="ts">
import { RateForm, ResultDeleteRestaurantButton } from "@/components";
import { useRestaurantMetaData } from "@/composables";
import { useAuthStore } from "@/store";
import { computed } from "vue";

const { restaurantMetaData } = useRestaurantMetaData();
const authStore = useAuthStore();

const check = computed(() => {
  const { auth } = authStore;

  if (!auth || !restaurantMetaData.value) {
    return {
      hasUserRated: false,
      hasUserCreatedThisRestaurant: false,
    };
  }

  const hasUserRated = restaurantMetaData.value.ratings.some(
    (rating) => rating.uid === auth.uid,
  );

  const hasUserCreatedThisRestaurant =
    restaurantMetaData.value.uid === auth.uid;

  return { hasUserRated, hasUserCreatedThisRestaurant };
});
</script>

<template>
  <section>
    <h2 sr-only>별점 남기기</h2>
    <p text-center text-wavveGray mt-40px v-if="!authStore.auth">
      로그인해서 별점을 남겨보세요!
    </p>
    <template v-else-if="check.hasUserCreatedThisRestaurant">
      <p text-center>내가 등록한 레스토랑이에요!</p>
      <ResultDeleteRestaurantButton />
    </template>
    <RateForm my-20px v-else-if="!check.hasUserRated" />
  </section>
</template>
