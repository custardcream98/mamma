<template>
  <label>
    <input
      class="checkbox"
      type="checkbox"
      :value="value"
      sr-only
      v-model="checked"
      @change="$emit('checkbox-change', { checked, value })"
    />
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

<script lang="ts" setup>
import { ref, type Ref } from "vue";

export type CheckboxChangeEvent = {
  checked: Ref<boolean>;
  value: string;
};
type CheckboxChangeEmit = {
  (event: "checkbox-change", payload: CheckboxChangeEvent): void;
};
type RoundedBadgeCheckboxProps = {
  value?: string;
  defaultChecked?: boolean;
};

const props = defineProps<RoundedBadgeCheckboxProps>();
const checked = ref<boolean>(props.defaultChecked);
defineEmits<CheckboxChangeEmit>();
</script>

<style scoped>
.checkbox:checked + .label-text {
  background-color: #3887ff;
  color: white;
}
</style>
