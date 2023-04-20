<script lang="ts" setup>
defineProps<{
  shouldBlankRight?: boolean
}>()
</script>

<template>
  <footer font-300 text-12px text-wavveGray :class="{'blank-right':shouldBlankRight}">
    <p>
      본 프로젝트는 2023 Wavve Tech Internship 웹개발팀에 의해 제작되었습니다.
    </p>
    <p mt-10px>© 콘텐츠웨이브(주) All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  word-break: keep-all;
}
.blank-right {
  padding-right: 80px;
}
</style>
