<script setup lang="ts">
import { useAuth } from "@/store/use-auth";
import LoginButton from "../LoginButton.vue";
import ModalBackdrop from "./ModalBackdrop.vue";
import ModalBody from "./ModalBody.vue";
import ModalTeleport from "./ModalTeleport.vue";

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
      </ModalBody>
    </ModalBackdrop>
  </ModalTeleport>
</template>
