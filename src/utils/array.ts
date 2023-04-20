const sortArrayInOrder = <T>(
  order: T[] | ReadonlyArray<T>,
  arrayToSort: T[],
): T[] => {
  return [...arrayToSort].sort((a, b) => {
    const aIndex = order.indexOf(a);
    const bIndex = order.indexOf(b);

    return aIndex - bIndex;
  });
};

const randomlyPickInArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export { sortArrayInOrder, randomlyPickInArray };
