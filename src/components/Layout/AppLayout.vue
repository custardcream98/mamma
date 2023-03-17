<script lang="ts" setup>
import AppHeader from "./AppHeader.vue";
</script>
<template>
  <div flex items-center h-100vh>
    <div
      m-auto
      h-100vh
      w-420px
      min-h-500px
      max-w-md
      p-24px
      pc:w-100vw
      pc:h-95vh
      pc:rounded-3xl
      pc:shadow
    >
      <AppHeader />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
