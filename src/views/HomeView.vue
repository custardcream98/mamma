<script lang="ts" setup>
import { HomeButton } from "@/components/Button";
import CategoryFilterDetail from "@/components/CategoryFilterDetail.vue";
import LoadingErrorSuspense from "@/components/LoadingErrorSuspense.vue";
import TagFilterDetail from "@/components/TagFilterDetail.vue";
import useRandomlyPickedRestaurantRouter from "@/composables/use-randomly-picked-restaurant-router";

const {
  pickAndRouteToRandomRestaurant,
  isRestaurantDataLoading,
  isRestaurantDataError,
  restaurantDataError,
} = useRandomlyPickedRestaurantRouter();

const handlePickerButtonClick = pickAndRouteToRandomRestaurant;
</script>

<template>
  <section>
    <h2 sr-only>랜덤맛집 확인하기 버튼 섹션</h2>
    <LoadingErrorSuspense
      :is-loading="isRestaurantDataLoading"
      :is-error="isRestaurantDataError"
      :error="restaurantDataError"
    >
      <template #default>
        <form @submit.prevent="handlePickerButtonClick">
          <HomeButton />
          <CategoryFilterDetail />
          <TagFilterDetail />
        </form>
      </template>
      <template #error>
        <p>
          에러가 발생했습니다.
          <a href="mailto:shiwoo@wavve.com" target="_blank">shiwoo@wavve.com</a
          >으로 문의해주세요.
        </p>
      </template>
    </LoadingErrorSuspense>
  </section>
</template>
