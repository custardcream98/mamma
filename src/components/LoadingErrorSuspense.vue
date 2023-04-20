<script setup lang="ts">
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import { ROUTE_NAME } from "@/constants/route";
import { watchEffect } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}>();
const router = useRouter();

watchEffect(() => {
  if (router.currentRoute.value.name === ROUTE_NAME.HOME) {
    return;
  }

  if (!props.isError) {
    return;
  }

  console.error(props.error);

  router.push({ name: ROUTE_NAME.HOME });
});
</script>

<template>
  <template v-if="isLoading">
    <LoadingIndicator />
  </template>
  <template v-else-if="isError">
    <slot name="error" />
  </template>
  <template v-else>
    <slot />
  </template>
</template>
