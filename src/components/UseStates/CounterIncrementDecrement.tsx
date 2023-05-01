import React, { useState } from "react";

type CounterProps = {};

function Counter(props: CounterProps) {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter-increment-decrement-flex">
      <p className="counter-increment-decrement-count-text">Count: {count}</p>
      <div className="counter-increment-decrement-count-space">
        <button
          className="counter-increment-decrement-count-plus"
          onClick={increment}
        >
          +
        </button>
        <button
          className="counter-increment-decrement-count-minus"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
