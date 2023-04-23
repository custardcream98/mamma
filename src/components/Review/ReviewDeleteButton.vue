<script setup lang="ts">
import { LoadableButton } from "@/components";
import { deleteRating, useGetRestaurantsDataQuery } from "@/request";
import { useSelectedRestaurantId } from "@/store/use-selected-restaurant-id";
import { ref } from "vue";

const props = defineProps<{
  reviewId: string;
}>();

const { refetch } = useGetRestaurantsDataQuery();
const selectedRestaurantId = useSelectedRestaurantId();
const isDeletingReview = ref<boolean>(false);

const deleteReview = async () => {
  if (!selectedRestaurantId.value || !props.reviewId) {
    return;
  }

  isDeletingReview.value = true;
  await deleteRating(props.reviewId, selectedRestaurantId.value);
  await refetch();
  isDeletingReview.value = false;
};
</script>

<template>
  <LoadableButton
    :is-loading="isDeletingReview"
    warning
    w-50px
    h-30px
    @click="deleteReview"
    type="button"
  >
    삭제
  </LoadableButton>
</template>
