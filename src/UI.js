const UI = (function () {
  const cityElement = document.querySelector("[data-city]");
  const countryElement = document.querySelector("[data-country]");
  const iconElement = document.querySelector("[data-icon]");
  const tempElement = document.querySelector("[data-temp]");
  const feelsElement = document.querySelector("[data-feels]");
  const pressureElement = document.querySelector("[data-pressure]");
  const humidityElement = document.querySelector("[data-humidity]");

  const showWeatherData = function (weatherData) {
    cityElement.innerText = weatherData.city;
    countryElement.innerText = weatherData.country;
    iconElement.src = `http://openweathermap.org/img/wn/${weatherData.icon}.png`;
    tempElement.innerText = weatherData.temp;
    feelsElement.innerText = weatherData.feels_like;
    pressureElement.innerText = weatherData.pressure;
    humidityElement.innerText = weatherData.humidity;
  };

  const showDefaultData = function () {
    cityElement.innerText = "--";
    countryElement.innerText = "--";
    iconElement.src = ``;
    tempElement.innerText = "--";
    feelsElement.innerText = "--";
    pressureElement.innerText = "--";
    humidityElement.innerText = "--";
  };

  return {
    showWeatherData,
    showDefaultData,
  };
})();

export default UI;
