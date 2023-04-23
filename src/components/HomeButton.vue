<script setup lang="ts">
import BackhandIndexPointingLeft from "@/assets/images/backhand-index-pointing-left.webp";
import { MainButton, MainButtonBoldText } from "@/components";
</script>

<template>
  <MainButton type="submit" text-wavveGray>
    <template #first-line>
      <MainButtonBoldText>터치</MainButtonBoldText>해서
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
