<script setup lang="ts">
import LoadingSpinner from "../LoadingSpinner.vue";

defineProps<{
  isLoading: boolean;
  warning?: boolean;
}>();
</script>

<template>
  <button :disabled="isLoading" :class="{ warning }">
    <slot v-if="!isLoading"></slot>
    <LoadingSpinner v-else :warning="warning" />
  </button>
</template>

<style scoped>
.warning {
  --at-apply: text-red font-500 text-sm rounded-full border border-red px-8px
    py-4px;
}
</style>
