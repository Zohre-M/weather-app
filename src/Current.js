import React from "react";
import Time from "./Time";
import ReactAnimatedWeather from "react-animated-weather";
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
        <img
          src={props.data.currentIconUrl}
          alt={props.data.currentDescription}
        />
        <span className="current-temperature-amount">
          {props.data.currentTemperature}
        </span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
}
