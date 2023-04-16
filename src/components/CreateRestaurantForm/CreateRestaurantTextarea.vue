<script lang="ts">
import type { TextareaHTMLAttributes } from "vue";
interface CreateRestaurantTextareaProps extends TextareaHTMLAttributes {
  label: string;
}

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
defineProps<CreateRestaurantTextareaProps>();
</script>

<template>
  <div mt-10px>
    <label :for="$attrs.id as string" mb-10px block break-keep>{{
      label
    }}</label>
    <textarea
      :id="$attrs.id as string"
      class="w-210px text-wavveDarkGray py-4px px-8px bg-badgeGray rounded-2 w-full h-100px resize-none placeholder:text-16px focus:outline-wavveBlue"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      spellcheck="false"
      v-bind="$attrs"
    />
  </div>
</template>
