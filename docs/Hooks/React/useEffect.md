
# 🎉 A Beginner's Guide to `useEffect`


![deps-compare-correct](https://user-images.githubusercontent.com/97989643/235735279-cb6ecbd2-fdf8-4e9d-9a02-6c25fff14c3e.gif)

Welcome to the world of React Hooks! Today, we'll dive into one of the most popular hooks: `useEffect`. Don't worry, we'll make it fun and easy to understand. So, let's get started! 🚀

![react-useeffect-hook-cleanup](https://user-images.githubusercontent.com/97989643/236387506-b38d84fb-af9c-4e8e-8a65-a9fa73ba10de.svg)


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


Example 2 - UserFetchData
```bash
UserFetch
├── Data.tsx
├── UserFetch.tsx

```
```Data.tsx```
```tsx
import React, { useEffect, useState } from "react";

// Define the shape of the data object that will be returned by the hook
type Data<T> = {
  status: "loading" | "success" | "error";
  data?: T;
  error?: Error;
};

// Custom hook that fetches data from an API endpoint and returns the data object
export function useFetch<T>(url: string): Data<T> {
  // Create a state variable called 'data' and initialize it with { status: "loading" }
  const [data, setData] = useState<Data<T>>({ status: "loading" });

  // useEffect hook that runs when the URL changes
  useEffect(() => {
    // Define an asynchronous function called 'fetchData'
    const fetchData = async () => {
      try {
        // Fetch data from the API endpoint
        const response = await fetch(url);
        const result = await response.json();

        // Update the 'data' state variable with the fetched data
        setData({ status: "success", data: result });
      } catch (error) {
        // Update the 'data' state variable with the error object
        setData({ status: "error", error: error as Error });
      }
    };

    // Call the 'fetchData' function to fetch data from the API endpoint
    fetchData();
  }, [url]); // Only run the effect when the url changes

  // Return the 'data' object
  return data;
}
```
1. The `Data` type defines the shape of the data object that will be returned by the `useFetch` hook. It contains three properties: `status`, `data`, and `error`.
2. The `useFetch` function takes a URL as its parameter and returns the `data` object that was defined earlier.
3. Within the `useFetch` function, `useState` is used to create a state variable `data` and its initial state is set to `{ status: "loading" }`.
4. `useEffect` is used to fetch the data from the API endpoint. It runs only when the URL changes because `[url]` is passed as its second argument.
5. Inside the `useEffect` function, `fetchData` is an asynchronous function that uses `try` and `catch` blocks to fetch the data from the API endpoint. If the fetch is successful, the `setData` function is called with `{ status: "success", data: result }`. If there is an error, the `setData` function is called with `{ status: "error", error: error as Error }`.
6. Finally, `useFetch` returns the `data` object.


```UserFetch.tsx```
```tsx
import React, { useState } from "react";
import { useFetch } from "./Data";

function UsersFetch() {
  // Create a state variable called 'url' and initialize it with the API endpoint URL
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

  // Call the 'useFetch' hook with the 'url' state variable
  const data = useFetch<Array<{ id: number; name: string }>>(url);

  // Render a button that changes the 'url' state variable when clicked
  return (
    <div>
      <button
        className="user-fetch-button"
        onClick={() => setUrl(url + "?_limit=5")}
      >
        Fetch only 5 users
      </button>
      {/* If the 'status' property of the 'data' object is 'loading', render a loading message */}
      {data.status === "loading" && <p>Loading...</p>}
      {/* If the 'status' property of the 'data' object is 'success', render a list of users */}
      {data.status === "success" && (
        <ul className="user-fetch-data-bg">
          {data.data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      {/* If the 'status' property of the 'data' object is 'error', render an error message */}
      {data.status === "error" && <p>Error: {data.error?.message}</p>}
    </div>
  );
}

export default UsersFetch;
```


1. The `UsersFetch` function is a React component that uses the `useFetch` hook to fetch data from an API endpoint and render it.
2. The component uses `useState` to create a state variable `url` with an initial value of `"https://jsonplaceholder.typicode.com/users"`.
3. The `data` variable is assigned the result of calling the `useFetch` hook with `url`.
4. A button is rendered that calls `setUrl` with a new URL when clicked.
5. The component renders different content depending on the `status` property of the `data` object.
6. If `status` is `"loading"`, the component renders a loading message.
7. If `status` is `"success"`, the component renders a list of users with their names.
8. If `status` is `"error"`, the component renders an error message with the error object's message.


Example 3 - Widget
```bash
Widget
├── ColorWidget.tsx
├── Widget.tsx
```
```Widget.tsx```
```tsx
// This function creates a new widget element with the specified background color and adds it to the provided container element.
export function createWidget(color: string, container: HTMLElement) {
    // Create a new div element to serve as the widget.
    const widget = document.createElement("div");
    // Set the widget's background color.
    widget.style.background = color;
    // Set the widget's width and height.
    widget.style.width = "100px";
    widget.style.height = "100px";
    // Set the widget's border radius.
    widget.style.borderRadius = "25%";
    // Set the widget's margin.
    widget.style.margin = "10px";
    // Set the widget's border style and color.
    widget.style.border = "2px solid pink";

    // Create a new custom event to be dispatched periodically by the widget.
    const statusChangeEvent = new CustomEvent("statusChange", {
        detail: { status: "active" },
    });

    // Set an interval to dispatch the statusChangeEvent every 1000 milliseconds (1 second).
    setInterval(() => {
        widget.dispatchEvent(statusChangeEvent);
    }, 1000);

    // Add the widget to the container element.
    container.appendChild(widget);

    // Return an object with functions to add and remove event listeners, as well as to destroy the widget.
    return {
        addEventListener: widget.addEventListener.bind(widget),
        removeEventListener: widget.removeEventListener.bind(widget),
        destroy: () => container.removeChild(widget),
    };
}

```
- Line 1: Define a function called `createWidget` that takes two arguments `color` (string) and `container` (HTMLElement).
- Line 2-9: Create a new `div` element with the provided `color`, set its size, shape, margin, and border.
- Line 11-15: Create a new custom event called `statusChangeEvent` with a `detail` property containing `{ status: "active" }`.
- Line 17-20: Dispatch the `statusChangeEvent` every second.
- Line 22: Append the `widget` to the `container`.
- Line 24-29: Return an object that has three properties: `addEventListener`, `removeEventListener`, and `destroy`.


```ColorWidget.tsx```
```tsx
import React, { useEffect, useRef, useState } from "react";
import { createWidget } from "./Widget";

interface ColorWidgetProps {
    initialColor: string;
}

const ColorWidget: React.FC<ColorWidgetProps> = ({ initialColor }) => {
    // useRef hook to create a reference to the container div element
    const containerRef = useRef<HTMLDivElement>(null);

    // useState hook to create a state variable for the color of the widget
    const [color, setColor] = useState(initialColor);

    // useEffect hook to run side-effects when the component mounts or the color state changes
    useEffect(() => {
        // Get the current value of the container reference
        const container = containerRef.current;

        // If the container exists, create a widget and add event listeners to it
        if (container) {
            // Create the widget with the given color and container
            const widget = createWidget(color, container);

            // Define a function to handle the "statusChange" event of the widget
            const handleStatusChange = (event: CustomEvent<{ status: string }>) => {
                console.log("The status is:", event.detail.status);
            };

            // Add an event listener to the widget to listen for "statusChange" events
            (widget as any).addEventListener("statusChange", handleStatusChange);

            // Return a cleanup function to remove the widget and event listeners when the component unmounts or the color changes
            return () => {
                widget.destroy();
                (widget as any).removeEventListener("statusChange", handleStatusChange);
            };
        }
    }, [color]);

    // Define a function to update the color state variable with a random hex color
    const changeColor = () => {
        setColor(
            `#${Math.floor(Math.random() * 0x1000000)
                .toString(16)
                .padStart(6, "0")}`
        );
    };

    // Render the ColorWidget component with a container div, a button to change the color, and the color widget itself
    return (
        <div className="color-widget">
            <div className="widget-container" ref={containerRef}></div>
            <button className="widget-button" onClick={changeColor}>
                Change Color
            </button>
        </div>
    );
};

export default ColorWidget;

```

- Line 1-8: Import necessary dependencies and define an interface for `ColorWidgetProps`.
- Line 10-18: Define a functional component called `ColorWidget` that takes `initialColor` as a prop and returns some JSX.
- Line 19: Create a reference using `useRef` to store a reference to a `div` element.
- Line 21-23: Define a state called `color` using `useState` and initialize it with `initialColor`.
- Line 25-47: Use `useEffect` to create a widget using `createWidget`, add an event listener to it, and clean up the widget and event listener when the `color` changes or the component is unmounted.
- Line 33-39: Define a function called `changeColor` that generates a random hexadecimal color and sets it as the new `color`.
- Line 42-46: Return some JSX that contains a `div` with a `ref` to the container reference, a button with an `onClick` event handler that calls `changeColor`, and some CSS classes for styling.


Example 4 - Conditional Effect
```ConditionalEffect.tsx```
```tsx
import React, { useState, useEffect } from "react";

export const ConditionalEffect: React.FC = () => {
    // state variables for count and message
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    // useEffect hook that runs whenever count changes
    useEffect(() => {
        // check if count is even or odd
        if (count % 2 === 0) {
            // set message to "Even" if count is even
            setMessage("Even");
        } else {
            // set message to "Odd" if count is odd
            setMessage("Odd");
        }
    }, [count]);

    // render the component with a button that increments count on click
    // also display the current message and count value
    return (
        <div>
            <button
                className="conditional-effect-button"
                onClick={() => setCount(count + 1)}
            >
                Conditional Effect
            </button>
            <p className="conditional-effect-text">{message}</p>
            <p className="conditional-effect-text">Count: {count}</p>
        </div>
    );
};

```
- `import React, { useState, useEffect } from "react";`: imports React and the useState and useEffect hooks from the `react` library.
- `const [count, setCount] = useState(0);`: declares a state variable `count` using the useState hook with an initial value of 0 and a function `setCount` that allows us to update the `count` variable.
- `const [message, setMessage] = useState("");`: declares a state variable `message` using the useState hook with an initial value of an empty string and a function `setMessage` that allows us to update the `message` variable.
- `useEffect(() => {...}, [count]);`: defines an effect that runs whenever the `count` state variable changes. If `count` is even, `message` is set to "Even", otherwise it is set to "Odd".
- `<button className="conditional-effect-button" onClick={() => setCount(count + 1)}>Conditional Effect</button>`: renders a button with a click handler that updates the `count` state variable when clicked.
- `<p className="conditional-effect-text">{message}</p>`: renders the value of `message`.
- `<p className="conditional-effect-text">Count: {count}</p>`: renders the value of `count`.


Example 5 - Timer Effect
```Timer.tsx```
```tsx
import React, { useState, useEffect } from "react";

export const Timer: React.FC = () => {
    // Set the initial state of seconds to 0 using useState hook
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Set an interval to increment seconds state by 1 every 1000ms using setInterval
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);

        // Clear the interval using clearInterval in the cleanup function
        return () => {
            clearInterval(interval);
        };
    }, []); // Effect only runs once (empty dependency array)

    return (
        <div>
            <p className="timer-text">
                You have been on this page for {seconds} seconds.
            </p>
        </div>
    );
};
```


- `import React, { useState, useEffect } from "react";`: Import the necessary React components.
- `const [seconds, setSeconds] = useState(0);`: Declare a state variable `seconds` and its corresponding updater function `setSeconds`, initialized to `0`.
- `useEffect(() => {...}, []);`: Use the `useEffect` hook to execute a side effect after the initial render and run cleanup before unmount. The dependency array is empty, so the effect will only run once after the initial render.
- `const interval = setInterval(() => {...}, 1000);`: Set an interval to increment the `seconds` state by 1 every second.
- `setSeconds((seconds) => seconds + 1);`: Update the `seconds` state with the updater function to increment its value by 1.
- `return () => {...};`: Return a cleanup function to clear the interval when the component is unmounted.
- `<p className="timer-text">You have been on this page for {seconds} seconds.</p>`: Render a paragraph element that displays the `seconds` state variable.


Example 6 - Update Title
```UpdateTitle.tsx```
```tsx
import React, { useEffect, useState } from "react";

export function UpdateTItle() {
    const [count, setCount] = useState(0); // create a state variable 'count' and its update function 'setCount' with an initial value of 0

    useEffect(() => {
        // This is a side effect that runs when the component mounts, and whenever 'count' changes
        // It updates the document title with the current count
        document.title = `You clicked ${count} times`;
    }, [count]); // Only run the effect when 'count' changes

    return (
        <div>
            <p className="update-title-text">You clicked {count} times</p>
            <button
                className="update-title-button"
                onClick={() => setCount(count + 1)}
            >
                Click me
            </button>
        </div>
    );
}

```

- The code defines a React functional component called `UpdateTitle`.
- The component initializes a state variable `count` with an initial value of 0, and its corresponding update function `setCount`.
- The `useEffect` hook is used to create a side effect that runs when the component mounts and whenever `count` changes.
- Inside the effect, the document title is updated with the current value of `count` interpolated into a string.
- The `useEffect` hook takes an array of dependencies as its second argument. When any of the dependencies change, the effect will run again. In this case, the effect only depends on `count`, so it will only run when `count` changes.
- The component returns a div containing a paragraph element that displays the current value of `count`, and a button that updates `count` when clicked.


That's it! Now you have a solid understanding of `useEffect` and how it can help you manage state in your React functional components. Happy coding! 🎉
