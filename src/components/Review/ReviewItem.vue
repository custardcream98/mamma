<template>
  <li bg-wavveLightGray my-8px py-14px px-20px rounded-lg flex justify-between>
    <span>{{ rater }}</span>
    <strong font-500
      >{{ rating.toFixed(1) }}
      <span text-wavveGray> / 5</span>
    </strong>
  </li>
</template>

<script lang="ts" setup>
type ReviewItemProps = {
  rater: string;
  rating: number;
};
defineProps<ReviewItemProps>();
</script>
