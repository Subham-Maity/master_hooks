import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p className="counter-count-text">Count: {count}</p>
      <button className="counter-count-button" onClick={incrementCount}>
        Increment Count
      </button>
    </div>
  );
};

export default Counter;
