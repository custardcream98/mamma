<script setup lang="ts">
import { ModalBackdrop, ModalTeleport } from "@/components/Modal";
import { modalInject } from "./context";

const { isModalOpened } = modalInject();
</script>

<template>
  <ModalTeleport>
    <Transition name="modal" mode="out-in">
      <ModalBackdrop v-show="isModalOpened">
        <slot></slot>
      </ModalBackdrop>
    </Transition>
  </ModalTeleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
