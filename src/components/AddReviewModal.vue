<script setup lang="ts">
import { ModalBackdrop, ModalBody, ModalTeleport } from "@/components/Modal";
import { useAuth } from "@/store/use-auth";
import LoginButton from "./LoginButton.vue";
import ReviewForm from "./ReviewForm.vue";

type AddReviewModalEmits = {
  (event: "closeModal"): void;
};
const emit = defineEmits<AddReviewModalEmits>();

const authStore = useAuth();

const handleBackdropClick = () => {
  emit("closeModal");
};
</script>

<template>
  <ModalTeleport>
    <ModalBackdrop @click="handleBackdropClick">
      <ModalBody>
        <LoginButton v-if="!authStore.auth" />
        <ReviewForm />
      </ModalBody>
    </ModalBackdrop>
  </ModalTeleport>
</template>
