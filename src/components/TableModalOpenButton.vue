<script setup lang="ts">
import { useModal } from "@/composables";
import AddReviewModal from "./AddReviewModal.vue";
import FloatingModalButton from "./FloatingModalButton.vue";
import { modalProvide } from "./Modal";

const {
  closeModal: closeTableModal,
  openModal: openTableModal,
  isModalOpened: isTableModalOpened,
} = useModal();

modalProvide({
  isModalOpened: isTableModalOpened,
  closeModal: closeTableModal,
  closeOnBackdropClick: true,
});
</script>

<template>
  <FloatingModalButton @click.stop="openTableModal" hover:bg-wavveBlue_100>
    레스토랑 목록 보기
    <AddReviewModal />
  </FloatingModalButton>
</template>
