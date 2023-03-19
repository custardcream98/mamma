<template>
  <section py-12px mt-16px>
    <h2 sr-only>리뷰</h2>
    <slot name="rating" />
    <p font-300 text-16px text-center px-10px>
      {{ review }}
    </p>
    <p mt-4px text-wavveGray text-14px text-center>
      by 최초 공유자 {{ reviewer }}
    </p>
  </section>
</template>

<script lang="ts" setup>
type ReviewDisplayProps = {
  review: string;
  reviewer: string;
};
defineProps<ReviewDisplayProps>();
</script>

<style scoped>
p {
  word-break: keep-all;
}
</style>
