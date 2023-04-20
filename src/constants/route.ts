const ROUTE_NAME = {
  HOME: "home",
  RESULT: "result",
} as const;

const ROUTE = {
  HOME: "/",
  RESULT: "/result/:restaurantId(\\d+)",
} as const;

export { ROUTE_NAME, ROUTE };
