<script setup lang="ts">
import { useGoogleAuthLogin } from "@/composables";

const { logout } = useGoogleAuthLogin();
</script>

<template>
  <button
    type="button"
    hover:text-red
    border
    border-2
    border-red
    block
    px-10px
    py-7px
    rounded-full
    mb-20px
    text-red
    font-700
    @click="logout"
  >
    로그아웃
  </button>
</template>
