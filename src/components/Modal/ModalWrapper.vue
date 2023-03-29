<script setup lang="ts">
import { ModalBackdrop, ModalTeleport } from "@/components/Modal";
import { modalInject } from "./context";

const { isModalOpened } = modalInject();
</script>

<template>
  <ModalTeleport>
    <ModalBackdrop v-show="isModalOpened">
      <slot></slot>
    </ModalBackdrop>
  </ModalTeleport>
</template>
