<template>
  <component :is="as" mt-16px flex flex-wrap gap-8px>
    <legend sr-only v-if="as === 'fieldset'">라운드 배지 묶음</legend>
    <slot />
  </component>
</template>

<script lang="ts" setup>
type RoundedBadgeWrapperProps = {
  as: "ul" | "fieldset";
};
withDefaults(defineProps<RoundedBadgeWrapperProps>(), {
  as: "fieldset",
});
</script>
