<script setup lang="ts">
import {
  BigButton,
  CreateRestaurantInput,
  CreateRestaurantTags,
  CreateRestaurantTextarea,
  LoadingSpinner,
  modalInject,
  StarRater,
} from "@/components";
import { ROUTE_NAME } from "@/constants/route";
import { createRestaurant } from "@/request/post-create-restaurant";
import { useGetRestaurantsDataQuery } from "@/request/use-get-restaurants-data-query";
import { useSearchTarget } from "@/store/use-search-target";
import type { RestaurantTags, RestaurantType } from "@/types/data";
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchTarget = useSearchTarget();
const isRestaurantCreating = ref<boolean>(false);
const { closeModal } = modalInject();
const { refetch } = useGetRestaurantsDataQuery();
const router = useRouter();

const handleSubmit = async (event: Event) => {
  const formElement = event.currentTarget as HTMLFormElement;

  const formData = new FormData(formElement);
  const menu = formData.get("menu") as unknown as string;
  const location = formData.get("location") as unknown as string;
  const review = formData.get("review") as unknown as string;
  const rating = parseFloat(formData.get("rating") as unknown as string);
  const tags = formData.getAll("tags") as unknown as RestaurantTags[];
  const type = formData.get("type") as unknown as RestaurantType;

  const _price = formData.get("price") as unknown as string;
  const price = parseFloat(_price);
  if (isNaN(price) || price < 100) {
    alert("가격은 100원 이상이어야 합니다.");
    return;
  }

  const isTagEmpty = tags.length === 0;

  if (isTagEmpty) {
    alert("하나 이상의 태그를 선택해주세요.");
    return;
  }

  try {
    isRestaurantCreating.value = true;

    const response = await createRestaurant({
      name: searchTarget.value,
      menu,
      price,
      location,
      review,
      rating,
      tags,
      type,
    });

    const createdRestaurantId = response?.data.createdRestaurantId;
    if (createdRestaurantId === undefined || createdRestaurantId === null) {
      throw new Error("invalid response");
    }

    await refetch();

    isRestaurantCreating.value = false;
    router.push({
      name: ROUTE_NAME.RESULT,
      params: { restaurantId: createdRestaurantId },
    });
    closeModal();
  } catch (_) {
    isRestaurantCreating.value = false;
  }
};
</script>

<template>
  <form flex flex-col gap-4 @submit.prevent="handleSubmit">
    <CreateRestaurantInput
      id="menu"
      name="menu"
      label="대표 메뉴"
      type="text"
      placeholder="내용을 입력해주세요."
      maxlength="20"
      required
    />
    <CreateRestaurantInput
      id="price"
      name="price"
      label="가격 (1인기준)"
      type="number"
      step="100"
      min="100"
      placeholder="가격을 입력해주세요."
      required
    />
    <CreateRestaurantInput
      id="location"
      name="location"
      label="위치"
      type="text"
      placeholder="내용을 입력해주세요."
      maxlength="100"
      required
    />
    <CreateRestaurantTags />
    <CreateRestaurantTextarea
      id="review"
      name="review"
      label="최초 공유자의 한마디"
      placeholder="내용을 입력해주세요."
      maxlength="300"
      required
    />
    <StarRater />
    <BigButton type="submit" :disabled="isRestaurantCreating" mt-20px>
      <template v-if="!isRestaurantCreating">등록하기</template>
      <LoadingSpinner v-else blue />
    </BigButton>
  </form>
</template>
