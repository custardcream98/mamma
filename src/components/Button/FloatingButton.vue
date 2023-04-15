<script setup lang="ts">
import SearchItemsIcon from "@/assets/svgs/SearchItemsIcon.vue";
import { modalProvide } from "@/components/Modal";
import { useModal } from "@/composables";
import { RestaurantsModal } from "../Modal/RestaurantsModal";

const { isModalOpened, openModal, closeModal } = useModal();
modalProvide({ isModalOpened, closeModal, closeOnBackdropClick: true });
</script>

<template>
  <aside>
    <button
      type="button"
      @click="openModal"
      pt-12px
      pr-12px
      pl-18px
      pb-15px
      rounded-full
      bg-white
      shadow-wavveBlue
      shadow
      cursor-pointer
    >
      <SearchItemsIcon title-string="검색하기" text-wavveBlue w-35px h-35px />
    </button>
    <RestaurantsModal />
  </aside>
</template>

<style scoped>
button {
  transition: all 0.2s ease-in-out;
}
button:hover {
  scale: 1.05;
}
</style>
