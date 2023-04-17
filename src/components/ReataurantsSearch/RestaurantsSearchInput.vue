<script lang="ts">
import { defineComponent } from "vue";

defineComponent({
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import SearchIcon from "@/assets/svgs/SearchIcon.vue";
import { ref } from "vue";

defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const isFocused = ref(false);

const handleInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

const toggleFocus = () => {
  isFocused.value = !isFocused.value;
};
</script>
<template>
  <div
    my-10px
    flex
    items-center
    justify-between
    w-full
    b-b-2px
    transition-colors
    :class="{ focused: isFocused, unfocused: !isFocused }"
  >
    <label for="search" sr-only>식당 검색하기</label>
    <input
      id="search"
      type="text"
      placeholder="식당을 검색해보세요."
      autocorrect="off"
      autocomplete="off"
      spellcheck="false"
      autocapitalize="off"
      maxlength="30"
      class="w-[calc(100%-30px)] py-5px rounded focus:outline-none"
      v-bind="$attrs"
      :value="modelValue"
      @input="handleInput"
      @focusin="toggleFocus"
      @focusout="toggleFocus"
    />
    <SearchIcon title-string="검색하기" />
  </div>
</template>
<style scoped>
.unfocused {
  --at-apply: b-b-wavveDarkGray;
}
.focused {
  --at-apply: b-b-wavveBlue;
}

.focused :deep(svg path) {
  --at-apply: fill-wavveBlue;
}
</style>
