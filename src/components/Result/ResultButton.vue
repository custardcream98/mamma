<script setup lang="ts">
import { MainButton, MainButtonBoldText } from "@/components";

defineProps<{
  name?: string;
  menu?: string;
}>();
</script>

<template>
  <MainButton>
    <template #first-line>
      <MainButtonBoldText class="hoverblue">{{ name }}</MainButtonBoldText
      >에서
    </template>
    <template #second-line>
      <MainButtonBoldText class="hoverblue">{{ menu }}</MainButtonBoldText>
      어때요?
    </template>
  </MainButton>
</template>
