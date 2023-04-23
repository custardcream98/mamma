<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <label>
    <input class="radio-button" type="radio" sr-only v-bind="$attrs" />
    <span
      class="label-text"
      inline-block
      rounded-full
      p-4px
      min-w-60px
      text-12px
      text-center
      cursor-pointer
      bg-badgeGray
      transition-colors
      font-500
    >
      <slot />
    </span>
  </label>
</template>

<style scoped>
.radio-button:checked + .label-text {
  background-color: #3887ff;
  color: white;
}
</style>
