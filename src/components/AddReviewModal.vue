<script setup lang="ts">
import { ModalBody } from "@/components/Modal";
import { ModalWrapper } from "./Modal";
import ModalClosseButton from "./Modal/ModalClosseButton.vue";
import RestaurantsTable from "./RestaurantsTable.vue";
</script>

<template>
  <ModalWrapper>
    <ModalBody relative>
      <ModalClosseButton top-15px right-15px absolute />
      <RestaurantsTable />
    </ModalBody>
  </ModalWrapper>
</template>
