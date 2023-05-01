import React, { useState, useEffect } from "react";
import fetchWeatherData from "./weather";

interface WeatherProps {
  location: string;
}

const WeatherButtons: React.FC<WeatherProps> = ({ location }) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [requestType, setRequestType] = useState<string>("");

  useEffect(() => {
    if (requestType) {
      fetchWeatherData(location, requestType).then((data: any) =>
        setWeatherData(data)
      );
    }
  }, [requestType, location]);

  return (
    <div>
      <button
        className="weather-current-weather-button"
        onClick={() => setRequestType("current")}
      >
        Current Weather
      </button>
      {weatherData && <pre>{JSON.stringify(weatherData, null, 2)}</pre>}
    </div>
  );
};

export default WeatherButtons;
