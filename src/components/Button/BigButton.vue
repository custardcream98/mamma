<template>
  <component :is="as" p-10px w-full>
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
  display: block;
  padding: 10px;
  width: 100%;
  border-radius: 9999px;
  background-color: white;
  color: #0050ff;
  text-align: center;
  font-weight: 700;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  transition: all 0.2s ease-in-out;
}

button:hover,
a:hover {
  color: white;
  background-color: #0050ffaa;
}
</style>
