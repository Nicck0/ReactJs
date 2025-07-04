import React, { useState } from "react";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // <-- Replace with your key

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    setError("");
    setWeather(null);
    if (!city) return setError("Please enter a city name.");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        return setError("City not found.");
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("Error fetching weather data.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Weather App</h1>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ padding: 8, width: "80%" }}
      />
      <button onClick={getWeather} style={{ marginLeft: 8, padding: 8 }}>Get Weather</button>
      {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
      {weather && (
        <div style={{ background: "#eef", padding: 16, borderRadius: 8, marginTop: 24 }}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div style={{ fontSize: "2em" }}>{Math.round(weather.main.temp)}°C</div>
          <div>{weather.weather[0].main} - {weather.weather[0].description}</div>
        </div>
      )}
    </div>
  );
}

export default App;