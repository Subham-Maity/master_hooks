import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
        onClick={incrementCount}
      >
        Increment Count
      </button>
    </div>
  );
};

export default Counter;
