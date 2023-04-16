<script setup lang="ts">
import InformToLogin from "@/components/InformToLogin.vue";
import { RateForm } from "@/components/RateForm";
import { useRestaurantMetaData } from "@/composables";
import { useAuthStore } from "@/store/use-auth";
import { computed } from "vue";
import DeleteResturant from "./DeleteResturant.vue";

const { restaurantMetaData } = useRestaurantMetaData();
const authStore = useAuthStore();

const hasUserRated = computed(() => {
  const auth = authStore.auth;
  if (!auth || !restaurantMetaData.value) {
    return false;
  }
  return restaurantMetaData.value.ratings.some(
    (rating) => rating.uid === auth.uid,
  );
});
const hasUserCreated = computed(() => {
  const auth = authStore.auth;
  if (!auth || !restaurantMetaData.value) {
    return false;
  }

  return restaurantMetaData.value.uid === auth.uid;
});
</script>

<template>
  <section>
    <h2 sr-only>별점 남기기</h2>
    <InformToLogin mt-40px v-if="!authStore.auth" />
    <DeleteResturant v-else-if="hasUserCreated" />
    <RateForm my-20px v-else-if="!hasUserRated" />
  </section>
</template>
