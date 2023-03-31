<script setup lang="ts">
import AddReviewIcon from "@/assets/svgs/AddReviewIcon.vue";
import { FloatingModal, modalProvide } from "@/components/Modal";
import { useModal } from "@/composables";

const { isModalOpened, openModal, closeModal } = useModal();
modalProvide({ isModalOpened, closeModal, closeOnBackdropClick: true });
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
    <FloatingModal />
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
