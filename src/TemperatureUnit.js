import React, { useState } from "react";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function handleCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit(temp) {
    return Math.round(temp * 1.8 + 32);
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="current-temperature-amount">{props.celsius}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={handleFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="current-temperature-amount">
          {fahrenheit(props.celsius)}
        </span>
        <span className="unit">
          <a href="/" onClick={handleCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
