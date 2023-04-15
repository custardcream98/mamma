<template>
  <component
    :is="as"
    class="block rounded-full bg-white text-wavveBlue text-center font-700 p-10px transition hover:text-white hover:bg-#0050ffaa"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
type BigButtonProps = {
  as: "button" | "a";
};
withDefaults(defineProps<BigButtonProps>(), {
  as: "button",
});
</script>

<style scoped>
button,
a {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
