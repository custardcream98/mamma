<template>
  <div flex items-center mb-4px>
    <StarIcon
      ml-auto
      fill="#FF27A3"
      title-string="리뷰 별점"
      width="20"
      height="20"
    />
    <p text-16px font-500 ml-4px mr-auto>
      {{ rating.toFixed(1) }}
      <span text-wavveGray> / 5 </span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import StarIcon from "@/components/Svg/StarIcon.vue";

type ReviewStarProps = {
  rating: number;
};
defineProps<ReviewStarProps>();
</script>
