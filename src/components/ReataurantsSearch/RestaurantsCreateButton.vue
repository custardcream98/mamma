<script setup lang="ts">
import PartyFace from "@/assets/images/party-face.webp";
import { useSearchTarget } from "@/store/use-search-target";

const searchTarget = useSearchTarget();
</script>

<template>
  <button
    py-8px
    transition-colors
    hover:bg-wavveBlue_100
    flex
    justify-between
    items-center
  >
    <strong font-300>
      <span font-500>"{{ searchTarget }}"</span>
      <span> 식당 최초로 등록하기</span>
    </strong>
    <img :src="PartyFace" alt="" width="20" height="20" />
  </button>
</template>
