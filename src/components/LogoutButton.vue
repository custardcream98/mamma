<script setup lang="ts">
import { logoutGoogle } from "@/lib/google-auth";
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
    @click="logoutGoogle"
  >
    로그아웃
  </button>
</template>
