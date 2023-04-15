<script lang="ts">
import { defineComponent } from "vue";

defineComponent({
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import SearchIcon from "@/assets/svgs/SearchIcon.vue";

defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div my-10px flex items-center justify-between w-full b-b-wavveDarkGray b-b>
    <label for="search" sr-only>식당 검색하기</label>
    <input
      id="search"
      type="text"
      placeholder="식당을 검색해보세요."
      autocorrect="off"
      autocomplete="off"
      spellcheck="false"
      autocapitalize="off"
      class="w-[calc(100%-30px)] py-5px rounded transition-all focus:outline-offset-4 focus:outline-wavveBlue"
      v-bind="$attrs"
      :value="modelValue"
      @input="handleInput"
    />
    <SearchIcon title-string="검색하기" />
  </div>
</template>
