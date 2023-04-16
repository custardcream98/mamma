<script lang="ts">
import type { InputHTMLAttributes } from "vue";
interface CreateRestaurantInputProps extends InputHTMLAttributes {
  label: string;
}

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
defineProps<CreateRestaurantInputProps>();
</script>

<template>
  <div flex justify-between items-center>
    <label :for="$attrs.id as string" break-keep>{{ label }}</label>
    <input
      :id="$attrs.id as string"
      class="w-180px text-wavveDarkGray py-4px px-8px bg-badgeGray rounded-2 focus:outline-wavveBlue small:w-210px"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      spellcheck="false"
      v-bind="$attrs"
    />
  </div>
</template>
