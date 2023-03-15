import { routeResolver } from "@/utils/route";

const ROUTE_NAME = {
  HOME: "",
  RESULT: "result",
} as const;

const PATH = {
  HOME: routeResolver(ROUTE_NAME.HOME),
  RESULT: routeResolver(ROUTE_NAME.RESULT),
} as const;

type PathType = keyof typeof PATH;

const ROUTE = {
  HOME: PATH.HOME,
  RESULT: routeResolver(PATH.RESULT, ":restaurantId(\\d+)"),
} as const;

export { ROUTE_NAME, ROUTE, PATH };
export type { PathType };
