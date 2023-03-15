<template>
  <section text-36px font-300 mt-100px>
    <h2 sr-only>메인 디스플레이 영역</h2>
    <button text-left @click.stop="$emit('click')">
      <span block><slot name="first-line" /></span>
      <span block><slot name="second-line" /></span>
    </button>
  </section>
</template>

<script lang="ts" setup>
defineEmits(["click"]);
</script>
