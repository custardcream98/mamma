import { sortArrayInOrder } from "@/utils/array";
import { ref, type Ref } from "vue";

const useFilter = <T>({
  initialFilter,
  filterOrder,
}: {
  initialFilter: T[];
  filterOrder: T[] | ReadonlyArray<T>;
}) => {
  const filter = ref(initialFilter) as Ref<T[]>;

  const _sortFilter = () => {
    filter.value = sortArrayInOrder(filterOrder, filter.value);
  };

  const addFilter = (target: T) => {
    filter.value.push(target);
    _sortFilter();
  };
  const removeFilter = (target: T) => {
    filter.value = filter.value.filter((element) => element !== target);
    _sortFilter();
  };

  return {
    filter,
    addFilter,
    removeFilter,
  };
};

export default useFilter;
