import { useRestaurantFilterStore } from "@/store/use-restaurant-filter";

const useRestaurantFilterText = () => {
  const { filterText, setFilter } = useRestaurantFilterStore();

  return {
    filterText,
    setFilter,
  };
};

export default useRestaurantFilterText;
