import { defineGenericContext } from "@/composables/define-context";
import type { Ref } from "vue";

type ModalContext = {
  closeOnBackdropClick: boolean;
  isModalOpened: Ref<boolean>;
  closeModal: () => void;
};
const {
  inject: modalInject,
  provide: modalProvide,
  key: MODAL_KEY,
} = defineGenericContext<ModalContext>();

export { modalInject, modalProvide, MODAL_KEY };
