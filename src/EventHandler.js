import WeatherAPI from "./WeatherAPI.js";
import UI from "./UI.js";

const EventHandler = (function () {
  const formElement = document.querySelector("#user-city-form");
  const inputElement = document.querySelector("[data-input]");

  const changeWeatherData = async function (city) {
    let data = await WeatherAPI.getWeatherData(city);
    if (!data) return;
    data = WeatherAPI.getFilterWeatherData(data);
    UI.showWeatherData(data);
  };

  const init = function () {
    UI.showDefaultData();
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValue = inputElement.value;
      changeWeatherData(inputValue);
    });
  };

  return {
    init,
  };
})();

export default EventHandler;
