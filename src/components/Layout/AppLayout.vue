<script lang="ts" setup>
import { TITLE_PROVIDER_KEY } from "@/constants/key";
import { provide, readonly, ref } from "vue";
import AppHeader from "./AppHeader.vue";

const title = ref<string>("오늘 점심 뭐 먹지? 맘마미아!");

provide(TITLE_PROVIDER_KEY, {
  title: readonly(title),
  setTitle: (newTitle: string) => {
    title.value = newTitle;
  },
});
</script>
<template>
  <main flex items-center h-100vh>
    <div
      m-auto
      h-100vh
      w-420px
      min-h-500px
      max-w-md
      p-3
      pc:w-100vw
      pc:h-95vh
      pc:rounded-3xl
      pc:shadow
    >
      <AppHeader />
      <slot />
    </div>
  </main>
</template>
