import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Weather() {
  const [city, setCity] = useState("Milan");
  const [weatherData, getWeatherData] = useState({ ready: false });
  const [weatherForecast, getWeatherForecast] = useState();

  function displayWeatherData(response) {
    getWeatherData({
      ready: true,
      currentTemperature: Math.round(response.data.temperature.current),
      currentDescription: response.data.condition.description,
      currentHumidity: response.data.temperature.humidity,
      currentWindSpeed: Math.round(response.data.wind.speed),
      currentIconUrl: response.data.condition.icon_url,
      currentIcon: response.data.condition.icon,
      currentTime: response.data.time,
      city: response.data.city,
    });
  }
  function handleForecast(response) {
    getWeatherForecast(response.data.daily);
    console.log(weatherForecast);
  }

  function getCurrentInfo() {
    let apiKey = "118fe35e7ob1e1d3379dc44t5fac90b2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&untis=metric`;
    axios.get(apiUrl).then(displayWeatherData);
  }
  function getForecast() {
    const apiKey = "118fe35e7ob1e1d3379dc44t5fac90b2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getCurrentInfo();
    getForecast();
  }

  if (weatherData.ready) {
    return (
      <div className="frame">
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              onChange={handleChange}
              className="search-bar"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </header>
        <main>
          <Current data={weatherData} />
          <div className="forecast">
            {weatherForecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div key={index}>
                    <Forecast data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Zohre-M"
              target="_blank"
              rel="noreferrer"
            >
              Zohreh Maghsoodi
            </a>
            , is open-sourced on{" "}
            <a
              href="https://github.com/Zohre-M/weather-app.git "
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://weather-app-eta-lac.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>
          </p>
        </footer>
      </div>
    );
  } else {
    getCurrentInfo();
    getForecast();
    return <p>loading ...</p>;
  }
}
