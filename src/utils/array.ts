const sortArrayInConstArrayOrder = <T>(
  constArray: ReadonlyArray<T>,
  arrayToSort: T[],
): T[] => {
  return [...arrayToSort].sort((a, b) => {
    const aIndex = constArray.indexOf(a);
    const bIndex = constArray.indexOf(b);

    return aIndex - bIndex;
  });
};

export { sortArrayInConstArrayOrder };
