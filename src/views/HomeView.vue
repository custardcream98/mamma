<script lang="ts" setup>
import CategoryFilterDetail from "@/components/CategoryFilterDetail.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { MainButton, MainButtonBoldText } from "@/components/MainButton";
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
    <LoadingIndicator v-if="isRestaurantDataLoading" />
    <template v-else-if="isRestaurantDataError">
      <p>에러가 발생했습니다.</p>
      <p>{{ restaurantDataError }}</p>
    </template>
    <template v-else>
      <form @submit.prevent="handlePickerButtonClick">
        <MainButton type="submit" class="main-button" text-wavveGray>
          <template #first-line>
            <MainButtonBoldText>터치</MainButtonBoldText>해서 👈
          </template>
          <template #second-line>
            <MainButtonBoldText class="hoverblue">랜덤맛집 </MainButtonBoldText>
            확인하기.
          </template>
        </MainButton>
        <CategoryFilterDetail />
        <TagFilterDetail />
      </form>
    </template>
  </section>
</template>

<style scoped>
.hoverblue {
  transition: all 0.3s ease-in-out;
}

.main-button:hover .hoverblue {
  color: #204ff5;
}
</style>
