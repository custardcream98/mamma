<script lang="ts" setup>
import {
  CategoryFilterDetail,
  HomeButton,
  LoadingErrorSuspense,
  TagFilterDetail,
} from "@/components";
import { useRandomlyPickedRestaurantRouter } from "@/composables";

const {
  pickAndRouteToRandomRestaurant,
  isRestaurantDataLoading,
  isRestaurantDataError,
  restaurantDataError,
} = useRandomlyPickedRestaurantRouter();
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
        <form @submit.prevent="pickAndRouteToRandomRestaurant">
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
