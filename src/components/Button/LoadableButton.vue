<script setup lang="ts">
import LoadingSpinner from "../LoadingSpinner.vue";

defineProps<{
  isLoading: boolean;
  warning?: boolean;
}>();
</script>

<template>
  <button :disabled="isLoading">
    <slot v-if="!isLoading"></slot>
    <LoadingSpinner v-else :warning="warning" />
  </button>
</template>
