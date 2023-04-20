<template>
  <component :is="as" flex flex-wrap gap-8px>
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
