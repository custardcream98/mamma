<script setup lang="ts">
import StarIcon from "@/assets/svgs/StarIcon.vue";

defineProps<{
  shouldFill?: boolean;
}>();
</script>

<template>
  <div flex>
    <StarIcon
      v-for="_ of new Array(5).fill(0)"
      :fill="shouldFill ? '#FF27A3' : '#EBEFF1'"
      title-string="별"
      width="40"
      height="40"
    />
  </div>
</template>
