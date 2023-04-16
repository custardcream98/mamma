import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";

const useSearchTargetStore = defineStore("search-target", () => {
  const searchTarget = ref<string>("");

  return {
    searchTarget,
  };
});

const useSearchTarget = () => {
  const store = useSearchTargetStore();
  const { searchTarget } = storeToRefs(store);

  return searchTarget;
};

export { useSearchTargetStore, useSearchTarget };
