<script setup lang="ts">
import LoadingIndicator from "@/components/LoadingIndicator.vue";

defineProps<{
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}>();
</script>

<template>
  <template v-if="isLoading">
    <LoadingIndicator />
  </template>
  <template v-else-if="isError">
    <p>에러가 발생했습니다.</p>
    <p>{{ error }}</p>
  </template>
  <template v-else>
    <slot />
  </template>
</template>
