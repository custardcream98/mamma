import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";

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

export { useSelectedRestaurantIdStore, useSelectedRestaurantId };
