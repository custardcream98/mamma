<template>
  <section text-36px font-300 mt-100px>
    <h2 sr-only>메인 디스플레이 영역</h2>
    <p><slot name="first-line" /></p>
    <p><slot name="second-line" /></p>
  </section>
</template>

<script lang="ts" setup>
type MainDisplayProps = {};

// defineProps<>();
</script>
