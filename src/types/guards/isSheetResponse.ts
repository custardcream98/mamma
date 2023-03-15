import type { SheetResponse } from "../data";

const isSheetResponse = (response: unknown): response is SheetResponse => {
  if (typeof response !== "object" || response === null) {
    return false;
  }

  if (
    !("hasNextPage" in response) ||
    typeof response.hasNextPage !== "boolean" ||
    !("results" in response) ||
    !Array.isArray(response.results) ||
    response.results.length === 0 ||
    typeof response.results[0] !== "object" ||
    response.results[0] === null
  ) {
    return false;
  }

  return true;
};

export default isSheetResponse;
