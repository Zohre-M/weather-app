import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(porps) {
  let city = porps.city;
  const [weatherForecast, getWeatherForecast] = useState({ ready: false });
  function handleForecast(response) {
    console.log(response);
    getWeatherForecast({
      ready: true,
      maxTemperature: Math.round(response.data.daily[0].temperature.maximum),
      minTemperature: Math.round(response.data.daily[0].temperature.minimum),
      forecastIcon: response.data.daily[0].condition.icon,
      forecastTime: response.data.daily[0].time,
    });
  }
  function getForecast() {
    const apiKey = "118fe35e7ob1e1d3379dc44t5fac90b2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  }

  if (weatherForecast.ready) {
    return (
      <div className="weather-forecast">
        <span>
          <div>{weatherForecast.forecastTime}</div>
          <div>
            <WeatherIcon data={weatherForecast.forecastIcon} />
          </div>
          <div>
            <span>{weatherForecast.maxTemperature}°</span>
            <span>{weatherForecast.minTemperature}°</span>
          </div>
        </span>
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
