import { ref } from "vue";

const useModal = (initialOpen: boolean = false) => {
  const isModalOpened = ref<boolean>(initialOpen);

  const openModal = () => {
    isModalOpened.value = true;
  };

  const closeModal = () => {
    isModalOpened.value = false;
  };

  return {
    isModalOpened,
    openModal,
    closeModal,
  };
};

export default useModal;
