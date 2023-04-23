<script setup lang="ts">
import { BigButton } from "@/components";

defineProps<{
  name?: string;
}>();
</script>

<template>
  <BigButton
    v-if="name"
    as="a"
    target="_blank"
    :href="`https://map.naver.com/v5/search/${encodeURI(`여의도 ${name}`)}`"
    >지도로 보기</BigButton
  >
</template>
