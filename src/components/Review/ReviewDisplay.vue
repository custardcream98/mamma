<template>
  <section py-12px mt-16px v-if="restaurantMetaData">
    <h2 sr-only>리뷰</h2>
    <ReviewStar />
    <p font-300 text-16px text-center px-10px>
      {{ restaurantMetaData.review }}
    </p>
    <p mt-4px text-wavveGray text-14px text-center>
      by 최초 공유자 {{ restaurantMetaData.reviewer }}
    </p>
    <ReviewList mt-30px>
      <ReviewItem
        v-for="(rate, index) of restaurantMetaData.ratings"
        :key="rate.방문자 + index"
        :rater="rate.방문자"
        :rating="rate.별점"
        :uid="rate.uid"
        :reviewId="rate.reviewId"
      />
    </ReviewList>
  </section>
</template>

<script lang="ts" setup>
import { useRestaurantMetaData } from "@/composables";
import ReviewItem from "./ReviewItem.vue";
import ReviewList from "./ReviewList.vue";
import ReviewStar from "./ReviewStar.vue";

const { restaurantMetaData } = useRestaurantMetaData();
</script>

<style scoped>
p {
  word-break: keep-all;
}
</style>
