<script setup lang="ts">
import PartyFace from "@/assets/images/party-face.webp";
import { useSearchTarget } from "@/store";

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
    class="max-w-100%"
  >
    <strong font-300 class="max-w-[calc(100%-25px)] truncate">
      <span font-500> "{{ searchTarget }}" </span>
      <wbr />
      <span> 식당 최초로 등록하기</span>
    </strong>
    <img :src="PartyFace" alt="" width="20" height="20" />
  </button>
</template>
