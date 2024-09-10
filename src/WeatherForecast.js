import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(porps) {
  let time = new Date(porps.data.forecastTime * 1000);
  let day = time.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="weather-forecast">
      <span>
        <div className="day">{days[day]}</div>
        <div>
          <WeatherIcon
            data={porps.data.forecastIcon}
            size={60}
            color={"#A9A6B3"}
          />
        </div>
        <div>
          <span className="max-temp">{porps.data.maxTemperature}°</span>
          <span className="min-temp">{porps.data.minTemperature}°</span>
        </div>
      </span>
    </div>
  );
}
