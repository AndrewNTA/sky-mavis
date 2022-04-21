const formatCurrencyPrice = price => {
  return new Intl.NumberFormat('en-US').format(price);
};
export default formatCurrencyPrice;
