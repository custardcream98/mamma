<script lang="ts" setup>
import CategoryFilter from "@/components/CategoryFilter.vue";
import { DetailWrapper } from "@/components/Detail";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { MainButton, MainButtonBoldText } from "@/components/MainButton";

import { ROUTE_NAME } from "@/constants/route";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { useRestaurantFilterStore } from "@/store/use-restaurant-filter";
import { randomlyPickInArray } from "@/utils/object";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter(); // TODO: useRouteTo 컴포저블 리팩터링해 사용하기
const store = useRestaurantFilterStore();

const {
  data: restaurants,
  isLoading,
  isError,
  error,
} = useGetRestaurantsDataQuery();

const handlePickerButtonClick = computed(() => () => {
  if (!restaurants.value) {
    return;
  }
  if (!store.filter.length) {
    return alert("하나 이상의 카테고리를 선택해주세요.");
  }

  const _pickedRestaurant = randomlyPickInArray(
    restaurants.value.filter((data) => store.filter.includes(data.meta.type)),
  );

  router.push({
    name: ROUTE_NAME.RESULT,
    params: {
      restaurantId: _pickedRestaurant.id,
    },
  });
});
</script>

<template>
  <LoadingIndicator v-if="isLoading" />
  <template v-else-if="isError">
    <p>에러가 발생했습니다.</p>
    <p>{{ error }}</p>
  </template>
  <template v-else>
    <form @submit.prevent="handlePickerButtonClick">
      <MainButton type="submit" text-wavveGray>
        <template #first-line>
          <MainButtonBoldText>터치</MainButtonBoldText>해서 👈
        </template>
        <template #second-line>
          <MainButtonBoldText>랜덤맛집 </MainButtonBoldText>
          확인하기.
        </template>
      </MainButton>
      <DetailWrapper>
        <template #summary
          >카테고리
          <strong text-wavveLightBlue>
            {{ store.filterText }}
          </strong>
        </template>
        <template #detail>
          <CategoryFilter />
        </template>
      </DetailWrapper>
    </form>
  </template>
</template>
