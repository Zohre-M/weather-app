import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function ForecastData(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherForecast, getWeatherForecast] = useState();

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);
  function handleForecast(response) {
    getWeatherForecast(response.data.daily);
    setLoaded(true);
  }
  function getForecast() {
    const apiKey = "118fe35e7ob1e1d3379dc44t5fac90b2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  }
  if (loaded) {
    return (
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
    );
  } else {
    getForecast();
    return null;
  }
}
