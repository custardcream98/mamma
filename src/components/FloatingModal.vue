<script setup lang="ts">
import { loginGoogle, logoutGoogle } from "@/lib/google-auth";
import { useAuthStore } from "@/store/use-auth";
import FloatingModalButton from "./FloatingModalButton.vue";
import { modalInject, ModalWrapper } from "./Modal";
import TableModalOpenButton from "./TableModalOpenButton.vue";

const { isModalOpened, closeModal } = modalInject();
const authStore = useAuthStore();

const handleLogout = () => {
  logoutGoogle();
  closeModal();
};
</script>

<template>
  <ModalWrapper v-show="isModalOpened">
    <ul
      flex
      flex-col
      justify-center
      absolute
      bottom-100px
      right-20px
      bg-white
      shadow
      rounded-2xl
      z-50
      py-20px
    >
      <template v-if="authStore.auth">
        <li>
          <TableModalOpenButton @click="closeModal" />
        </li>
        <li>
          <FloatingModalButton
            @click.stop="handleLogout"
            text-red
            hover:bg-red200
          >
            로그아웃
          </FloatingModalButton>
        </li>
      </template>
      <li v-else>
        <FloatingModalButton
          @click.stop="loginGoogle"
          text-wavveBlue
          hover:bg-wavveBlue_100
        >
          로그인
        </FloatingModalButton>
      </li>
    </ul>
  </ModalWrapper>
</template>
