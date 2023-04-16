<script lang="ts" setup>
import { useAuthStore } from "@/store/use-auth";
import { computed } from "vue";
import ReviewDeleteButton from "./ReviewDeleteButton.vue";

type ReviewItemProps = {
  rater: string;
  rating: number;
  uid?: string;
  reviewId?: string;
};
const props = defineProps<ReviewItemProps>();

const authStore = useAuthStore();
const isUsersReview = computed<boolean>(
  () => authStore.auth?.uid === props.uid,
);
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
      <ReviewDeleteButton
        v-if="isUsersReview && authStore.auth && reviewId"
        :review-id="reviewId"
        ml-8px
      />
    </strong>
  </li>
</template>
