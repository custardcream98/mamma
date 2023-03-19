<template>
  <button p-10px w-full v-if="as === 'button'">
    <slot />
  </button>
  <a p-10px w-full v-else>
    <slot />
  </a>
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
  border-radius: 10px;
  background-color: #204ff5;
  color: white;
  text-align: center;

  transition: all 0.2s ease-in-out;
}

button:hover,
a:hover {
  background-color: #204ff5aa;
}
</style>
