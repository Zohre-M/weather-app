import React, { useState } from "react";

import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let maxTemperature = Math.round(props.data.temperature.maximum);
  let minTemperature = Math.round(props.data.temperature.minimum);
  let forecastIcon = props.data.condition.icon;
  let forecastTime = props.data.time;

  let time = new Date(forecastTime * 1000);
  let day = time.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="weather-forecast">
      <span>
        <div className="day">{days[day]}</div>
        <div>
          <WeatherIcon data={forecastIcon} size={60} color={"#A9A6B3"} />
        </div>
        <div>
          <span className="max-temp">{maxTemperature}°</span>
          <span className="min-temp">{minTemperature}°</span>
        </div>
      </span>
    </div>
  );
}
