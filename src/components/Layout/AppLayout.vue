<script lang="ts" setup>
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
</script>
<template>
  <div
    flex
    flex-col
    m-auto
    h-100vh
    w-420px
    min-h-500px
    max-w-md
    p-24px
    pc:mt-2.5vh
    pc:w-100vw
    pc:h-95vh
    pc:rounded-3xl
    pc:shadow
  >
    <AppHeader />
    <main flex-1>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
