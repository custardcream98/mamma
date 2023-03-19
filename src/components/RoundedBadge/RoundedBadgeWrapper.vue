<template>
  <fieldset v-if="as === 'fieldset'" mt-16px flex flex-wrap gap-8px>
    <legend sr-only>라운드 배지 묶음</legend>
    <slot />
  </fieldset>
  <ul v-else mt-16px flex flex-wrap gap-8px>
    <slot />
  </ul>
</template>

<script lang="ts" setup>
type RoundedBadgeWrapperProps = {
  as: "ul" | "fieldset";
};
withDefaults(defineProps<RoundedBadgeWrapperProps>(), {
  as: "fieldset",
});
</script>
