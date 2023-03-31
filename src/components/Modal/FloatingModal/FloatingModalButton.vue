<script setup lang="ts">
import { RouterLink } from "vue-router";

withDefaults(
  defineProps<{
    as: "button" | "a";
  }>(),
  {
    as: "button",
  },
);
</script>

<template>
  <component
    :is="as === 'a' ? RouterLink : as"
    block
    text-center
    transition-colors
    font-600
    px-20px
    py-10px
    w-full
  >
    <slot></slot>
  </component>
</template>
