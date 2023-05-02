const fetchWeatherData = async (
  location: string,
  requestType: string
): Promise<any> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER ?? ""; // replace with your own API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export default fetchWeatherData;
