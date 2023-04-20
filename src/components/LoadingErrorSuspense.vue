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
  if (!props.isError) {
    return;
  }

  console.error(props.error);

  router.push({ name: ROUTE_NAME.HOME });
});
</script>

<template>
  <template v-if="isLoading || isError">
    <LoadingIndicator />
  </template>
  <template v-else>
    <slot />
  </template>
</template>
