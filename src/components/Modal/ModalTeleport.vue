<script setup lang="ts">
import { onMounted, ref } from "vue";

const mounted = ref<boolean>(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <Teleport v-if="mounted" to="#teleport">
    <slot></slot>
  </Teleport>
</template>
