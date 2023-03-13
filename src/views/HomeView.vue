<script lang="ts" setup>
import BigButton from "@/components/BigButton.vue";
import { ROUTE_NAME } from "@/constants/route";
import restaurantsData from "@/data/restaurant.json";
import { randomlyPickInArray } from "@/utils/object";
import { useRouter } from "vue-router";

const router = useRouter();

const handlePickerButtonClick = () => {
  const _pickedRestaurant = randomlyPickInArray(restaurantsData.restaurants);

  router.push({
    name: ROUTE_NAME.RESULT,
    params: {
      restaurantId: _pickedRestaurant.id,
    },
  });
};
</script>

<template>
  <BigButton type="button" @click.stop="handlePickerButtonClick"
    >Pick again!</BigButton
  >
</template>
