import { onBeforeUnmount, ref, watch, type Ref } from "vue";

const useDebounce = <T>(
  target: Ref<T>,
  callback: (arg: T) => void | Promise<void>,
  delay = 500,
) => {
  const timeout = ref<ReturnType<typeof setTimeout>>();

  watch(
    () => target.value,
    (newValue, oldValue) => {
      if (newValue !== oldValue) {
        if (timeout.value) {
          clearTimeout(timeout.value);
        }

        timeout.value = setTimeout(async () => {
          await callback(target.value);
        }, delay);
      }
    },
  );

  onBeforeUnmount(() => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
  });
};

export default useDebounce;
