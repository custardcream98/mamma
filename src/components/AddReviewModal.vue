<script setup lang="ts">
import { ModalBody } from "@/components/Modal";
import { useAuthStore } from "@/store/use-auth";
import LoginButton from "./LoginButton.vue";
import { ModalWrapper } from "./Modal";
import ReviewForm from "./ReviewForm.vue";

const authStore = useAuthStore();
</script>

<template>
  <ModalWrapper>
    <ModalBody>
      <LoginButton v-if="!authStore.auth" />
      <ReviewForm v-else />
    </ModalBody>
  </ModalWrapper>
</template>
