<script setup lang="ts">
import { ModalBody } from "@/components/Modal";
import { ModalWrapper } from "./Modal";
import ModalClosseButton from "./Modal/ModalClosseButton.vue";
import RestaurantsList from "./RestaurantsList.vue";
</script>

<template>
  <ModalWrapper>
    <ModalBody relative>
      <ModalClosseButton top-15px right-15px absolute />
      <RestaurantsList />
    </ModalBody>
  </ModalWrapper>
</template>
