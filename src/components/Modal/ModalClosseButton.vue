<script setup lang="ts">
import CloseIcon from "@/assets/svgs/CloseIcon.vue";
import { modalInject } from "./context";

const { closeModal } = modalInject();
</script>

<template>
  <button type="button" @click="closeModal">
    <CloseIcon iconTitle="모달 닫기" />
  </button>
</template>
