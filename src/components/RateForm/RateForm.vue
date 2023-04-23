<script setup lang="ts">
import { BigButton } from "@/components";
import { postRating, useGetRestaurantsDataQuery } from "@/request";
import { useAuthStore, useSelectedRestaurantId } from "@/store";
import { ref } from "vue";
import StarRater from "./StarRater.vue";

const selectedRestaurantId = useSelectedRestaurantId();

const isPostingRating = ref<boolean>(false);
const rangeElement = ref<{
  resetValue: () => void;
}>();
const authStore = useAuthStore();
const { refetch } = useGetRestaurantsDataQuery();

const handleSubmit = async (event: Event) => {
  const formElement = event.currentTarget as HTMLFormElement;

  const formData = new FormData(formElement);
  const rating = formData.get("rating");
  const name = authStore.auth?.displayName;

  if (
    typeof name !== "string" ||
    typeof rating !== "string" ||
    !selectedRestaurantId.value ||
    !authStore.auth ||
    !rangeElement.value
  ) {
    return;
  }

  isPostingRating.value = true;
  await postRating({
    restaurantId: selectedRestaurantId.value,
    name,
    rating: parseFloat(rating),
    uid: authStore.auth.uid,
  });
  await refetch();
  isPostingRating.value = false;

  rangeElement.value.resetValue();
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <StarRater ref="rangeElement" />
    <BigButton
      type="submit"
      :disabled="isPostingRating"
      mt-20px
      w-fit
      mx-auto
      px-30px
    >
      별점 등록하기
    </BigButton>
  </form>
</template>
