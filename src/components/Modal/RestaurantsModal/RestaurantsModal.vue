<script setup lang="ts">
import { CreateRestaurantForm } from "@/components/CreateRestaurantForm";
import { RestaurantsSearch } from "@/components/ReataurantsSearch";
import { useSearchTarget } from "@/store/use-search-target";
import { ref, watchEffect } from "vue";
import { ModalBody, ModalCloseButton, modalInject, ModalWrapper } from "..";

const modalPage = ref<number>(0);
const searchTarget = useSearchTarget();
const { isModalOpened } = modalInject();

const handleToNextPage = () => {
  modalPage.value++;
};

watchEffect(() => {
  if (!isModalOpened.value) {
    modalPage.value = 0;
  }
});
</script>

<template>
  <ModalWrapper>
    <ModalBody flex flex-col>
      <div flex justify-between items-center>
        <strong text-20px>
          <Transition name="modal-title" mode="out-in">
            <span v-if="modalPage === 0">검색하기</span>
            <span v-else>{{ searchTarget }} 등록하기</span>
          </Transition>
        </strong>
        <ModalCloseButton />
      </div>
      <Transition name="restaurant-search" mode="out-in">
        <RestaurantsSearch
          v-if="modalPage === 0"
          @to-next-page="handleToNextPage"
        />
        <CreateRestaurantForm v-else mt-25px />
      </Transition>
    </ModalBody>
  </ModalWrapper>
</template>

<style scoped>
.modal-title-enter-active,
.modal-title-leave-active {
  transition: all 0.2s ease-in-out;
}

.modal-title-enter-from,
.modal-title-leave-to {
  opacity: 0;
}

.restaurant-search-enter-active,
.restaurant-search-leave-active {
  transition: all 0.2s ease-in-out;
}

.restaurant-search-enter-from,
.restaurant-search-leave-to {
  transform: translate(100px);
  opacity: 0;
}
</style>
