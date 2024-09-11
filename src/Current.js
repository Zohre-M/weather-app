import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";

export default function Current(props) {
  return (
    <div className="current-weather">
      <div className="current-weather-data">
        <h1>{props.data.city}</h1>
        <p>
          <Time timeData={props.data.currentTime} />,{" "}
          {props.data.currentDescription}
        </p>
        <p>
          Humidity:{" "}
          <span className="weather-data-amount">
            {props.data.currentHumidity}%
          </span>
          , Wind:{" "}
          <span className="weather-data-amount">
            {props.data.currentWindSpeed}km/h
          </span>
        </p>
      </div>
      <div className="current-temperature">
        <span className="current-icon">
          <WeatherIcon
            data={props.data.currentIcon}
            size={90}
            color={"black"}
          />
        </span>
        <span className="current-temperature-amount">
          {props.data.currentTemperature}
        </span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
}
