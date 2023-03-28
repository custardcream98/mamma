<script setup lang="ts">
import { useModal } from "@/composables";
import { AddReviewModal } from "./Modal";
import AddReviewIcon from "./Svg/AddReviewIcon.vue";

const { isModalOpened, openModal, closeModal } = useModal();
</script>

<template>
  <aside>
    <button
      type="button"
      @click="openModal"
      p-18px
      rounded-full
      bg-white
      shadow-wavveBlue
      shadow
      cursor-pointer
    >
      <AddReviewIcon title-string="리뷰 추가하기" />
    </button>
    <AddReviewModal v-if="isModalOpened" @close-modal="closeModal" />
  </aside>
</template>

<style scoped>
button {
  transition: all 0.2s ease-in-out;
}
button:hover {
  scale: 1.05;
}
</style>
