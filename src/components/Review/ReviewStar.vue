<script lang="ts" setup>
import StarIcon from "@/assets/svgs/StarIcon.vue";
import { useRestaurantMetaData } from "@/composables";

const { restaurantMetaData } = useRestaurantMetaData();
</script>

<template>
  <div flex items-center mb-4px v-if="restaurantMetaData">
    <StarIcon
      ml-auto
      fill="#FF27A3"
      title-string="평균 별점"
      width="20"
      height="20"
    />
    <p text-16px font-500 ml-4px mr-auto>
      {{ restaurantMetaData.ratingAvg }}
      <span text-wavveGray> / 5 </span>
    </p>
  </div>
</template>
