<script setup lang="ts">
import BackhandIndexPointingLeft from "@/assets/images/backhand-index-pointing-left.webp";
import { MainButton, MainButtonBoldText } from "./MainButton";
</script>

<template>
  <MainButton type="submit" class="main-button" text-wavveGray>
    <template #first-line>
      <MainButtonBoldText>터치</MainButtonBoldText>해서
      <img w-40px h-40px ml-7px :src="BackhandIndexPointingLeft" alt="" />
    </template>
    <template #second-line>
      <MainButtonBoldText class="hoverblue">랜덤맛집 </MainButtonBoldText>
      확인하기.
    </template>
  </MainButton>
</template>

<style scoped>
.hoverblue {
  transition: all 0.3s ease-in-out;
}

.main-button:hover .hoverblue {
  color: #204ff5;
}
</style>
