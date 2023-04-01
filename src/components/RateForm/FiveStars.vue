<script setup lang="ts">
import StarIcon from "@/assets/svgs/StarIcon.vue";

defineProps<{
  shouldFill?: boolean;
}>();
</script>

<template>
  <div flex>
    <StarIcon
      v-for="index of new Array(5).fill(0)"
      :fill="shouldFill ? '#FF27A3' : 'none'"
      :title-string="'별' + index"
      width="50"
      height="50"
      showStroke
    />
  </div>
</template>
