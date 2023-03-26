import { defineStore, storeToRefs } from "pinia";
import { ref, watchEffect, type Ref } from "vue";

const useSelectedRestaurantIdStore = defineStore(
  "selected-restaurant-id",
  () => {
    const selectedRestaurantId = ref<number>();
    const setSelectedRestaurantId = (id: number) => {
      selectedRestaurantId.value = id;
    };

    return {
      selectedRestaurantId,
      setSelectedRestaurantId,
    };
  },
);

const useSelectedRestaurantId = () => {
  const store = useSelectedRestaurantIdStore();
  const { selectedRestaurantId } = storeToRefs(store);

  return selectedRestaurantId;
};

const useSetSelectedRestaurantId = (id: Ref<number>) => {
  const store = useSelectedRestaurantIdStore();

  watchEffect(() => {
    store.setSelectedRestaurantId(id.value);
  });
};

export {
  useSelectedRestaurantIdStore,
  useSelectedRestaurantId,
  useSetSelectedRestaurantId,
};
