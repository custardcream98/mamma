<script setup lang="ts">
import { modalInject } from "./context";

const { closeOnBackdropClick, closeModal } = modalInject();

const handleBackdropClick = () => {
  if (!closeOnBackdropClick) {
    return;
  }
  console.log("closeOnBackdropClick");

  closeModal();
};
</script>

<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-#ffffff88"
    @click.stop="handleBackdropClick"
  >
    <slot></slot>
  </div>
</template>
