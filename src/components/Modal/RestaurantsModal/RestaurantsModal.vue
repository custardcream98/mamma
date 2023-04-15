<script setup lang="ts">
import { ModalBody } from "@/components/Modal";
import { RestaurantsSearch } from "@/components/ReataurantsSearch";
import { ModalWrapper } from "..";
import ModalClosseButton from "../ModalClosseButton.vue";
</script>

<template>
  <ModalWrapper>
    <ModalBody flex flex-col>
      <div flex justify-between items-center>
        <strong text-20px>검색하기</strong>
        <ModalClosseButton />
      </div>
      <RestaurantsSearch />
    </ModalBody>
  </ModalWrapper>
</template>
