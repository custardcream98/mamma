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
      w-60px
      h-60px
      rounded-full
      bg-white
      shadow-wavveBlue
      shadow
      cursor-pointer
      flex
      items-center
      justify-center
    >
      <SearchItemsIcon
        title-string="검색하기"
        text-wavveBlue
        w-35px
        h-35px
        ml-5px
      />
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
