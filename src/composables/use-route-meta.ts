import { ref } from "vue";
import { useRouter, type RouteMeta } from "vue-router";

const useRouteMeta = () => {
  const router = useRouter();

  const meta = ref<RouteMeta>(router.currentRoute.value.meta);

  router.beforeEach((to) => {
    meta.value = to.meta;
  });

  return meta;
};

export default useRouteMeta;
