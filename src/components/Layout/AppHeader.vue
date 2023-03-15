<script lang="ts" setup>
import MammaLogoSrc from "@/assets/mamma-logo.svg";
import { TITLE_PROVIDER_KEY } from "@/constants/key";
import { inject } from "vue";
const titleInjected = inject(TITLE_PROVIDER_KEY);

if (!titleInjected) {
  throw new Error("title is not provided");
}
</script>

<template>
  <header mt-24px text-center>
    <strong text-wavveGray font-300 text-14px>
      {{ titleInjected.title.value }}
    </strong>
    <h1 mt-8px>
      <img m-auto :src="MammaLogoSrc" />
    </h1>
  </header>
</template>
