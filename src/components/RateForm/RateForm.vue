<script setup lang="ts">
import { INPUT_NAME_NAME } from "@/constants/star-rater";
import { postRating } from "@/request";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { useAuthStore } from "@/store/use-auth";
import { useSelectedRestaurantId } from "@/store/use-selected-restaurant-id";
import { ref } from "vue";
import { LoadableButton } from "../Button";
import StarRater from "./StarRater.vue";

const selectedRestaurantId = useSelectedRestaurantId();

const isPosingRating = ref<boolean>(false);
const rangeElement = ref<{
  resetValue: () => void;
}>();
const authStore = useAuthStore();
const { refetch } = useGetRestaurantsDataQuery();

const handleClick = async (event: Event) => {
  const formElement = event.currentTarget as HTMLFormElement;

  const formData = new FormData(formElement);
  const name = formData.get("name");
  const rating = formData.get("rating");

  if (
    typeof name !== "string" ||
    typeof rating !== "string" ||
    !selectedRestaurantId.value ||
    !authStore.auth ||
    !rangeElement.value
  ) {
    return;
  }

  isPosingRating.value = true;
  await postRating({
    restaurantId: selectedRestaurantId.value,
    name,
    rating: parseFloat(rating),
    uid: authStore.auth.uid,
  });
  await refetch();
  isPosingRating.value = false;

  formElement.reset();
  rangeElement.value.resetValue();
};
</script>

<template>
  <form @submit.prevent="handleClick">
    <StarRater ref="rangeElement" />
    <div flex gap-10px justify-center items-center mt-20px>
      <label for="name">이름</label>
      <input
        id="name"
        type="text"
        :name="INPUT_NAME_NAME"
        required
        maxlength="10"
        w-100px
        b-1
        rounded
        h-30px
        px-10px
      />
      <LoadableButton
        type="submit"
        :isLoading="isPosingRating"
        ml-10px
        rounded-xl
        bg-wavveBlue
        text-white
        w-100px
        h-40px
      >
        별점 남기기
      </LoadableButton>
    </div>
  </form>
</template>
