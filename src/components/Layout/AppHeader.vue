<script lang="ts" setup>
import { useRouteMeta } from "@/composables";
import MammaLogo from "../Svg/MammaLogo.vue";
const routeMeta = useRouteMeta();
</script>

<template>
  <header mt-24px text-center>
    <strong text-wavveGray font-300 text-14px>
      {{ routeMeta.headerTitle }}
    </strong>
    <h1 mt-8px>
      <MammaLogo m-auto />
    </h1>
  </header>
</template>
