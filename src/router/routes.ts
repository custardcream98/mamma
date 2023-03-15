import { ROUTE, ROUTE_NAME } from "@/constants/route";
import HomeView from "@/views/HomeView.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: ROUTE.HOME,
    name: ROUTE_NAME.HOME,
    component: HomeView,
  },
  {
    path: ROUTE.RESULT,
    name: ROUTE_NAME.RESULT,
    component: () => import("@/views/ResultView.vue"),
    props: true,
  },
];

export default routes;
