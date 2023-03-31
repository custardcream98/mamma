<script setup lang="ts">
import { loginGoogle } from "@/lib/google-auth";
</script>

<template>
  <button
    type="button"
    @click.stop="loginGoogle"
    px-15px
    py-10px
    bg-wavveBlue
    text-white
    font-700
    rounded-2xl
    transition
    hover:scale-105
  >
    구글 로그인 하기
  </button>
</template>
