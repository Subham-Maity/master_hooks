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
    <div className="text-2xl">
      <button
        className="weather-current-weather-button"
        onClick={() => setRequestType("current")}
      >
        Current Weather
      </button>
      {weatherData && (
        <div className="weather-json-bg">
          <pre className="weather-button-pre-wrap">
            {JSON.stringify(weatherData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default WeatherButtons;
