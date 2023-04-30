import React, { useState } from "react";

// Define a type for the props of the Counter component
type CounterProps = {
  // No props for this component
};

function Counter(props: CounterProps) {
  // Create a state variable called count and initialize it to 0
  // Use number as the type for count and setCount
  const [count, setCount] = useState<number>(0);

  // Define a function to increment the count by 1
  function increment() {
    setCount(count + 1);
  }

  // Define a function to decrement the count by 1
  function decrement() {
    setCount(count - 1);
  }

  // Return the JSX code for the component
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-2xl font-bold mb-2 text-gray-200">Count: {count}</p>
      <div className="flex space-x-4">
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          onClick={increment}
        >
          +
        </button>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
