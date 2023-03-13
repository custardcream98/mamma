import { ROUTE } from "@/constants/route";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE.HOME,
      name: "home",
      component: HomeView,
    },
    {
      path: ROUTE.RESULT,
      name: "result",
      component: () => import("@/views/ResultView.vue"),
    },
  ],
});

export default router;
