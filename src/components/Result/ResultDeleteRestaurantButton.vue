<script setup lang="ts">
import { LoadableButton } from "@/components";
import { useRestaurantMetaData } from "@/composables";
import { deleteRestaurant } from "@/request/delete-restaurant";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { ref } from "vue";

const { restaurantMetaData } = useRestaurantMetaData();
const { refetch } = useGetRestaurantsDataQuery();
const isDeletingRestaurant = ref<boolean>(false);

const handleClick = async () => {
  if (!restaurantMetaData.value) {
    return;
  }

  try {
    isDeletingRestaurant.value = true;
    await deleteRestaurant(restaurantMetaData.value.id);
    await refetch();
    isDeletingRestaurant.value = false;
  } catch (_) {
    isDeletingRestaurant.value = false;
    return;
  }
};
</script>

<template>
  <LoadableButton
    :is-loading="isDeletingRestaurant"
    warning
    w-100px
    h-35px
    mx-auto
    mt-10px
    type="button"
    @click="handleClick"
  >
    삭제하기
  </LoadableButton>
</template>
