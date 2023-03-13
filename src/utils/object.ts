const randomlyPickInArray = <T>(array: T[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export { randomlyPickInArray };
