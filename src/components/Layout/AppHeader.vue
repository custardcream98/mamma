<script lang="ts" setup>
import { useRouteMeta } from "@/composables";
import MammaLogo from "../Svg/MammaLogo.vue";
const routeMeta = useRouteMeta();
</script>

<template>
  <header mt-24px text-center>
    <Transition name="fade" mode="out-in">
      <strong
        text-wavveGray
        font-300
        text-14px
        block
        :key="routeMeta.headerTitle"
      >
        {{ routeMeta.headerTitle }}
      </strong>
    </Transition>
    <h1 mt-8px>
      <MammaLogo m-auto />
    </h1>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
