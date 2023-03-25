const formatter = new Intl.NumberFormat("ko-KR", {
  currency: "KRW",
});

const numberToFormattedString = (number: number) => {
  return formatter.format(number);
};

export { numberToFormattedString };
