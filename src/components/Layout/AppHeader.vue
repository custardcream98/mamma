<script lang="ts" setup>
import { useRouteMeta } from "@/composables";
import { ROUTE } from "@/constants/route";
import MammaLogo from "../Svg/MammaLogo.vue";
const routeMeta = useRouteMeta();
</script>

<template>
  <header text-center>
    <h1>
      <RouterLink :to="ROUTE.HOME">
        <Transition name="fade" mode="out-in">
          <strong
            text-wavveGray
            font-300
            text-14px
            pt-24px
            block
            :key="routeMeta.headerTitle"
          >
            {{ routeMeta.headerTitle }}
          </strong>
        </Transition>
        <MammaLogo m-auto mt-8px />
      </RouterLink>
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
