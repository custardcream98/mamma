<script setup lang="ts">
import { useModal } from "@/composables";
import { modalProvide } from "..";
import FloatingModalButton from "../FloatingModal/FloatingModalButton.vue";
import AddReviewModal from "./RestaurantsModal.vue";

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
    <slot></slot>
    <AddReviewModal />
  </FloatingModalButton>
</template>
