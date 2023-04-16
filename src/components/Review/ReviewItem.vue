<script lang="ts" setup>
import { deleteRating } from "@/request/delete-rating";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { useAuthStore } from "@/store/use-auth";
import { useSelectedRestaurantId } from "@/store/use-selected-restaurant-id";
import { computed, ref } from "vue";
import { LoadableButton } from "../Button";

type ReviewItemProps = {
  rater: string;
  rating: number;
  uid?: string;
  reviewId?: string;
};
const props = defineProps<ReviewItemProps>();

const { refetch } = useGetRestaurantsDataQuery();
const selectedRestaurantId = useSelectedRestaurantId();
const authStore = useAuthStore();
const isUsersReview = computed<boolean>(
  () => authStore.auth?.uid === props.uid,
);
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
  <li
    bg-wavveLightGray
    my-8px
    py-14px
    px-20px
    rounded-lg
    flex
    justify-between
    items-center
  >
    <span>{{ rater }}</span>
    <strong font-500 flex items-center gap-3px
      >{{ rating.toFixed(1) }}
      <span text-wavveGray> / 5</span>
      <LoadableButton
        v-if="isUsersReview && authStore.auth"
        :is-loading="isDeletingReview"
        warning
        ml-8px
        w-50px
        h-30px
        @click="deleteReview"
        type="button"
      >
        삭제
      </LoadableButton>
    </strong>
  </li>
</template>
