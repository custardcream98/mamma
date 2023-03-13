import { ROUTE, ROUTE_NAME } from "@/constants/route";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE.HOME,
      name: ROUTE_NAME.HOME,
      component: HomeView,
    },
    {
      path: ROUTE.RESULT,
      name: ROUTE_NAME.RESULT,
      component: () => import("@/views/ResultView.vue"),
    },
  ],
});

export default router;
