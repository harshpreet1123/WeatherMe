import React, { useState } from "react";
import Details from "./components/Details";
const api = {
  key: "cd45055eed096436af33d8b662a963a0",
  base: "https:/api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? "app"
          : "open"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}
              </div>
              <span className="cel-main">
                <div>&#8451;</div>
                <div className="main">{weather.weather[0].main}</div>
              </span>
            </div>
            <div className="date">
              {dateBuilder(new Date())}
            </div>
            <section className="details-box">
              <h2>Weather Details</h2>
              <Details parameter1='Feels Like' info1={Math.round(weather.main.feels_like)} units1="&#8451;" parameter2="Min" info2={Math.round(weather.main.temp_min)} units2="&#8451;"/>
              <Details parameter1='Wind Speed' info1={weather.wind.speed} units1="Km/h" parameter2="Pressure" info2={weather.main.pressure} units2="hpa"/>
              <Details parameter1='Humidity' info1={weather.main.humidity} units1="%" parameter2="Visibility" info2={Math.round(weather.visibility/1000)} units2="Km"/>
              {/* <div className="row">
                <div className="col">
                  <p>Feels Like</p>
                  <h1>{Math.round(weather.main.feels_like)}&#8451;</h1>
                </div>
                <div className="col">
                  <p>Min/max</p>
                  <h1>{Math.round(weather.main.temp_min)}/{Math.round(weather.main.temp_max)}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Humidity</p>
                  <h1>{weather.main.humidity}%</h1>
                </div>
                <div className="col">
                  <p>Visibility</p>
                  <h1>{Math.round(weather.visibility/1000)} Km</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Wind Speed</p>
                  <h1>{weather.wind.speed} Km/h</h1>
                </div>
                <div className="col">
                  <p>Pressure</p>
                  <h1>{weather.main.pressure} hpa</h1>
                </div>
              </div> */}
            </section>
          </div>
        ) : (
          <div className="open">
            <h1>WeatherMe</h1>
            <h4>v0.3</h4>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
