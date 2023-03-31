<script setup lang="ts">
import { ModalBody } from "@/components/Modal";
import RestaurantsList from "@/components/RestaurantsList.vue";
import { ModalWrapper } from "..";
import ModalClosseButton from "../ModalClosseButton.vue";
</script>

<template>
  <ModalWrapper>
    <ModalBody relative>
      <ModalClosseButton top-15px right-15px absolute />
      <RestaurantsList />
    </ModalBody>
  </ModalWrapper>
</template>
