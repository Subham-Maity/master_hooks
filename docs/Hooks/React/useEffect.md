
# 🎉 A Beginner's Guide to `useEffect`


![deps-compare-correct](https://user-images.githubusercontent.com/97989643/235735279-cb6ecbd2-fdf8-4e9d-9a02-6c25fff14c3e.gif)

Welcome to the world of React Hooks! Today, we'll dive into one of the most popular hooks: `useEffect`. Don't worry, we'll make it fun and easy to understand. So, let's get started! 🚀

## 📚 What is `useEffect`

`useEffect` is a **React Hook** that allows you to perform side effects in your functional components. Side effects are actions that happen outside of your component, like fetching data, updating the DOM, or subscribing to events. With `useEffect`, you can manage these side effects without writing a class or function. 🎉

## 🧪 How `useEffect` works

`useEffect` is like a Swiss Army knife 🇨🇭🔪 for side effects in your functional components. It combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components into one simple hook.

Here's how it works:

1. You call `useEffect` with a function that contains your side effect.
2. React runs your side effect function after rendering the component.
3. If you provide a cleanup function, React will call it when the component is unmounted or when the dependencies change.

No need to write a class or function! 🤯

## ⚡ Different use cases

Let's explore some common use cases for `useEffect`:

1. **Fetching data**: You can use `useEffect` to fetch data from an API and update your component's state when the data is received. 📦
2. **Updating the document title**: Want to change the title of your webpage based on the component's state? `useEffect` to the rescue! 🦸‍♂️
3. **Setting up event listeners**: Need to listen for events like window resizing or keyboard input? `useEffect` can help you set up and clean up event listeners. 🎧
4. **Persisting state**: Want to save your component's state to local storage or a database? `useEffect` can handle that too! 💾
5. **Timers and intervals**: If you need to set up a timer or interval in your component, `useEffect` is the perfect tool for the job. You can start the timer when the component mounts and clear it when the component unmounts. ⏳


## 📝 Examples of useEffect use cases 📝

### Example 1: Fetching data

- `Strucutre`

```bash
FetchData
├── button.tsx
├── location.tsx
├── weather.tsx
```
```button.tsx```
```tsx
import React, { useState, useEffect } from "react";
import fetchWeatherData from "./weather"; // Import the function to fetch weather data

interface WeatherProps {
    location: string;
}

const WeatherButtons: React.FC<WeatherProps> = ({ location }) => {
    const [weatherData, setWeatherData] = useState<any>(null); // Create state to hold weather data and initialize it to null
    const [requestType, setRequestType] = useState<string>(""); // Create state to hold the type of request to make and initialize it to an empty string

    useEffect(() => {
        if (requestType) { // If a request type has been selected
            fetchWeatherData(location, requestType).then((data: any) => // Call the function to fetch weather data
                setWeatherData(data) // Set the weather data to the response from the API
            );
        }
    }, [requestType, location]); // Run the effect when either request type or location changes

    return (
        <div className="text-2xl">
            <button
                className="weather-current-weather-button"
                onClick={() => setRequestType("current")} // When the button is clicked, set the request type to "current"
            >
                Current Weather
            </button>
            {weatherData && ( // If weather data exists
                <div className="weather-json-bg">
          <pre className="weather-button-pre-wrap">
            {JSON.stringify(weatherData, null, 2)} // Display the weather data as JSON
          </pre>
                </div>
            )}
        </div>
    );
};

export default WeatherButtons;


```
This component renders a button that fetches weather data from the API when clicked. It has the following features:
- It imports the `useState` and `useEffect` hooks from React, and the `fetchWeatherData` function from `weather.tsx`.
- It receives the `location` prop from its parent component, which specifies the city for which weather data should be fetched.
- It defines two state variables using the `useState` hook: `weatherData`, which stores the fetched weather data, and `requestType`, which determines what type of weather data to fetch (e.g., current weather, 5-day forecast).
- It uses the `useEffect` hook to fetch weather data from the API when `requestType` changes (i.e., when the button is clicked), and update the `weatherData` state variable with the fetched data.
- It renders a button with an `onClick` event that sets the `requestType` state variable to "current" (i.e., fetch current weather data).
- If `weatherData` is not null, it renders a `pre` tag that displays the fetched data in JSON format.

```location.tsx```
```tsx
import React, { createContext, useState } from "react";

export const LocationContext = createContext<any>(null); // Create a context object to hold location data

export const LocationProvider: React.FC = ({ children }) => { // Create a provider component for the context
    const [location, setLocation] = useState<string>("New York"); // Create state to hold the current location and initialize it to "New York"

    const changeLocation = (newLocation: string) => {
        setLocation(newLocation); // Function to update the location
    };

    return (
        <LocationContext.Provider value={{ location, changeLocation }}>
            {children}
        </LocationContext.Provider>
    );
};



```
This component creates a context that stores the current location for which weather data should be fetched. It has the following features:
- It imports the `createContext` and `useState` hooks from React.
- It creates a `LocationContext` using the `createContext` hook, which is used to pass the `location` state variable and `changeLocation` function to child components.
- It defines a `LocationProvider` component using the `useState` hook, which sets the initial `location` state variable to "New York".
- It defines a `changeLocation` function that updates the `location` state variable with a new location.
- It renders the `LocationContext.Provider` component with the `location` state variable and `changeLocation` function as its value, and its child components as its children.
```weather.tsx```
```tsx
const fetchWeatherData = async (
  location: string,
  requestType: string
): Promise<any> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER ?? ""; // Get the API key from the environment variables
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`; // Construct the API URL using the location and API key

  const response = await fetch(apiUrl); // Make a request to the API
  const data = await response.json(); // Parse the response as JSON
  return data; // Return the data
};

export default fetchWeatherData;

```
This component defines a function that fetches weather data from the OpenWeatherMap API using the provided `location` and `requestType` parameters. It has the following features:
- It defines an `async` function called `fetchWeatherData` that takes in `location` and `requestType` parameters.
- It gets the API key from an environment variable called `NEXT_PUBLIC_WEATHER`.
- It constructs the API URL using the `location` and `apiKey` variables, and uses `fetch` to make a GET request to the API.
- It uses the `json` method of the response object to convert the response to a JavaScript object.
- It returns the fetched data as a `Promise`.

How to use
```bash
import WeatherButtons from "../components/react/useEffect/FetchData/button";
import { LocationProvider } from "../components/react/useEffect/FetchData/location";

<LocationProvider>
  <WeatherButtons
    location="London"
    units="metric"
    theme="dark"
  />
</LocationProvider>
```
To use these components, you can import `WeatherButtons` and `LocationProvider` into your own React component and wrap `WeatherButtons` inside `LocationProvider`. You can then pass in the desired `location` (and optionally, `units` and `theme`) props to `WeatherButtons`. When the button is clicked, the weather data for the specified location will be fetched and displayed in JSON format.


