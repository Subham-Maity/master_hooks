import React, { useEffect, useState } from "react";

export function UpdateTItle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title with the current count
    document.title = `You clicked ${count} times`;
  }, [count]); // Only run the effect when count changes

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
