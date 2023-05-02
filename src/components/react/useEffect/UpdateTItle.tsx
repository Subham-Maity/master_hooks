import React, { useEffect, useState } from "react";

export function UpdateT() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title with the current count
    document.title = `You clicked ${count} times`;
  }, [count]); // Only run the effect when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
