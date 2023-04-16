<template>
  <component :is="as" mt-16px flex flex-wrap gap-8px>
    <slot />
  </component>
</template>

<script lang="ts" setup>
type RoundedBadgeWrapperProps = {
  as?: "ul" | "fieldset";
};
withDefaults(defineProps<RoundedBadgeWrapperProps>(), {
  as: "fieldset",
});
</script>
