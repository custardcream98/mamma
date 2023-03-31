<script setup lang="ts">
import { ModalBody } from "@/components/Modal";
import { useAuthStore } from "@/store/use-auth";
import LoginButton from "./LoginButton.vue";
import { ModalWrapper } from "./Modal";
import ModalClosseButton from "./Modal/ModalClosseButton.vue";
import RestaurantsTable from "./RestaurantsTable.vue";

const authStore = useAuthStore();
</script>

<template>
  <ModalWrapper>
    <ModalBody relative>
      <ModalClosseButton top-15px right-15px absolute />
      <template v-if="!authStore.auth">
        <p text-center mb-20px font-500>
          wavve.com 구글 아이디로 로그인해주세요!
        </p>
        <LoginButton m-auto block />
      </template>
      <RestaurantsTable v-else />
    </ModalBody>
  </ModalWrapper>
</template>
