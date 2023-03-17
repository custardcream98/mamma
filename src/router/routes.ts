import { HEADER_TITLE } from "@/constants/header-title";
import { ROUTE, ROUTE_NAME } from "@/constants/route";
import HomeView from "@/views/HomeView.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: ROUTE.HOME,
    name: ROUTE_NAME.HOME,
    component: HomeView,
    meta: {
      headerTitle: HEADER_TITLE.HOME,
    },
  },
  {
    path: ROUTE.RESULT,
    name: ROUTE_NAME.RESULT,
    component: () => import("@/views/ResultView.vue"),
    props: true,
    meta: {
      headerTitle: HEADER_TITLE.RESULT,
    },
  },
];

export default routes;
