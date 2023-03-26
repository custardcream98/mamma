const withDefaultString = (value: string | undefined, defaultValue: string) => {
  return value ? value : defaultValue;
};

export { withDefaultString };
