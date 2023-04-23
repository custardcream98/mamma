import type { SheetResponse } from "../data";

const isRawResponse = (response: unknown): response is SheetResponse => {
  if (typeof response !== "object" || response === null) {
    return false;
  }

  if (
    !Array.isArray(response) ||
    response.length === 0 ||
    typeof response[0] !== "object" ||
    response[0] === null
  ) {
    return false;
  }

  return true;
};

export { isRawResponse };
