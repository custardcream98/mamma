<script lang="ts" setup>
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { MainButton, MainButtonBoldText } from "@/components/MainButton";
import { ROUTE_NAME } from "@/constants/route";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { randomlyPickInArray } from "@/utils/object";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const {
  data: restaurants,
  isLoading,
  isError,
  error,
} = useGetRestaurantsDataQuery();

const handlePickerButtonClick = computed(() => () => {
  if (!restaurants.value) return;

  const _pickedRestaurant = randomlyPickInArray(restaurants.value);
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
    <MainButton text-wavveGray @click="handlePickerButtonClick">
      <template #first-line>
        <MainButtonBoldText>터치</MainButtonBoldText>해서 👈
      </template>
      <template #second-line>
        <MainButtonBoldText>랜덤맛집 </MainButtonBoldText>
        확인하기.
      </template>
    </MainButton>
  </template>
</template>
