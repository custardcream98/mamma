<script setup lang="ts">
import { loginGoogle, logoutGoogle } from "@/lib/firebase";
import { useAuthStore } from "@/store/use-auth";
const authStore = useAuthStore();
</script>

<template>
  <button
    text-14px
    text-wavveDarkGray
    type="button"
    @click="loginGoogle"
    v-if="!authStore.auth"
  >
    로그인
  </button>
  <div text-12px text-wavveDarkGray small:text-14px v-else>
    <button
      type="button"
      @click="logoutGoogle"
      class="after:content-['|'] after:ml-4px after:mr-8px"
    >
      로그아웃
    </button>
    <span mr-2px>{{ authStore.auth.displayName }}</span>
    <span text-wavveGray>님 안녕하세요</span>
  </div>
</template>
