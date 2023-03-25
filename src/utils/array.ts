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

const randomlyPickInArray = <T>(array: T[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export { sortArrayInConstArrayOrder, randomlyPickInArray };
