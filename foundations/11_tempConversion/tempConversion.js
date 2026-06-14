const convertToCelsius = function (fahrenheitTemperature) {
  let celsiusTemp = (fahrenheitTemperature - 32) * (5 / 9);
  celsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return celsiusTemp;
};

const convertToFahrenheit = function (celsiusTemperature) {
  let fahrenheitTemp = celsiusTemperature * (9 / 5) + 32;
  fahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return fahrenheitTemp;
};

convertToCelsius(-100);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
