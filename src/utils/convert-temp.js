const conversions = {
  convert2Celsius(tempF) {
    return ((tempF - 32) * 5) / 9;
  },

  convert2Fahrenheit(tempC) {
    return (tempC * 9) / 5 + 32;
  },
};

export function tryConvert(temperature, conversion) {
  // If the input is not a valid number, return an empty string.
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = conversions[conversion](input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
