const WeatherAPI = (function () {
  const APIKEY = "291f23c2339ee5591efaae46d1c3cd48";
  const language = "es";
  const units = "metric"; // celcius

  const getWeatherData = async function (geocodingData) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${geocodingData}&units=${units}&lang=${language}&appid=${APIKEY}`
      );
      if (!response.ok) throw Error(response.status);
      const data = await response.json();
      return data;
    } catch {
      return null;
    }
  };

  const getFilterWeatherData = function (weatherData) {
    return {
      city: weatherData.name,
      country: weatherData.sys.country,
      timeUTC: weatherData.dt,
      weather: weatherData.weather[0].main,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      temp: weatherData.main.temp,
      feels_like: weatherData.main.feels_like,
      temp_min: weatherData.main.temp_min,
      temp_max: weatherData.main.temp_max,
      pressure: weatherData.main.pressure,
      humidity: weatherData.main.humidity,
    };
  };

  return {
    getWeatherData,
    getFilterWeatherData,
  };
})();

export default WeatherAPI;
