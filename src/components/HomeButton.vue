<script setup lang="ts">
import BackhandIndexPointingLeft from "@/assets/images/backhand-index-pointing-left.webp";
import { MainButton, MainButtonBoldText } from "@/components";
</script>

<template>
  <MainButton type="submit" text-wavveGray>
    <template #first-line>
      <MainButtonBoldText class="bg-animated">터치</MainButtonBoldText>해서
      <img
        inline-block
        align-top
        w-54px
        h-54px
        ml-7px
        :src="BackhandIndexPointingLeft"
        alt=""
      />
    </template>
    <template #second-line>
      <MainButtonBoldText class="hoverblue">랜덤맛집 </MainButtonBoldText>
      확인하기.
    </template>
  </MainButton>
</template>

<style scoped>
@keyframes textClip {
  to {
    background-position: 200% center;
  }
}

.bg-animated {
  display: inline-block;
  background-image: linear-gradient(
    -90deg,
    #0050ff 0%,
    #00a6ff 20%,
    #00ffff 40%,
    #00ffff 60%,
    #00a6ff 80%,
    #0050ff 100%
  );
  background-size: 200% auto;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;

  animation: textClip 3s linear infinite;
}
</style>
