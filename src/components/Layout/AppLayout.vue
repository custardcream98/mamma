<script lang="ts" setup>
import FloatingButton from "../FloatingButton.vue";
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
</script>
<template>
  <div
    relative
    overflow-hidden
    m-auto
    h-screen
    w-screen
    min-h-500px
    max-w-md
    pc:mt-2.5vh
    pc:h-95vh
    pc:rounded-3xl
    pc:shadow
  >
    <div overflow-scroll flex flex-col w-full h-full p-24px>
      <AppHeader />
      <main flex-1 min-h-screen pc:min-h-95vh>
        <slot />
      </main>
      <AppFooter />
    </div>
    <FloatingButton absolute right-24px bottom-24px />
    <div id="teleport"></div>
  </div>
</template>

<style scoped></style>
