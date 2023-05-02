import React, { useState, useEffect } from "react";

export const ConditionalEffect: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count % 2 === 0) {
      setMessage("Even");
    } else {
      setMessage("Odd");
    }
  }, [count]);

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
