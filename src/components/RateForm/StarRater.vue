<script setup lang="ts">
import { INPUT_RANGE_NAME, RANGE, WRAPPER_WIDTH } from "@/constants/star-rater";
import { computed, ref } from "vue";
import FiveStars from "./FiveStars.vue";

const inputValue = ref<number>(0);
const resetValue = () => (inputValue.value = 0);
defineExpose({ resetValue });
const filledWidth = computed(() => (inputValue.value / RANGE) * WRAPPER_WIDTH);

const starRaterWrapperElement = ref<HTMLDivElement>();

const handleClick = (event: MouseEvent) => {
  if (!starRaterWrapperElement.value) {
    return;
  }

  const { x: wrapperOffsetX } =
    starRaterWrapperElement.value.getBoundingClientRect();

  const { clientX: eventOffsetX } = event;

  inputValue.value = parseFloat(
    (((eventOffsetX - wrapperOffsetX) / WRAPPER_WIDTH) * RANGE).toFixed(1),
  );
};
</script>

<template>
  <div flex flex-col items-center>
    <div flex cursor-pointer @click="handleClick" ref="starRaterWrapperElement">
      <div overflow-hidden h-40px relative :style="`width: ${filledWidth}px`">
        <FiveStars should-fill absolute left-0 />
      </div>
      <div
        overflow-hidden
        h-40px
        relative
        :style="`width: ${WRAPPER_WIDTH - filledWidth}px`"
      >
        <FiveStars absolute right-0 />
      </div>
    </div>
    <em mt-5px font-500
      >{{ inputValue.toFixed(1) }} <span text-wavveGray>/ 5</span></em
    >
  </div>
  <label sr-only>
    별점
    <input
      v-model="inputValue"
      type="range"
      min="0"
      max="5"
      step="0.1"
      required
      :name="INPUT_RANGE_NAME"
    />
  </label>
</template>
