<script lang="ts" setup>
// interface ResultDisplayProps {
//   name: string;
//   menu: string;
// } // ts4082

defineProps<{
  name: string;
  menu: string;
}>();
</script>

<template>
  <section class="text-center">
    <h2 class="mt-4 text-5xl font-bold">{{ name }}</h2>
    <p class="mt-4">{{ menu }}</p>
  </section>
</template>
