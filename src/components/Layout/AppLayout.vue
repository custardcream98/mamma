<script lang="ts" setup>
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
</script>
<template>
  <div
    overflow-scroll
    flex
    flex-col
    m-auto
    h-100vh
    w-100vw
    min-h-500px
    max-w-md
    p-24px
    pc:mt-2.5vh
    pc:h-95vh
    pc:rounded-3xl
    pc:shadow
  >
    <AppHeader />
    <main flex-1>
      <slot />
    </main>
    <AppFooter mt-20px />
  </div>
</template>
