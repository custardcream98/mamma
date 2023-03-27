<script setup lang="ts">
import AddReviewIcon from "./Svg/AddReviewIcon.vue";
</script>

<template>
  <aside>
    <button
      type="button"
      @click="$emit('click')"
      p-20px
      rounded-full
      bg-white
      shadow-wavveBlue
      shadow
    >
      <AddReviewIcon title-string="리뷰 추가하기" />
    </button>
  </aside>
</template>
