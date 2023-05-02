import React, { useState, useEffect } from "react";

export const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className="timer-text">
        You have been on this page for {seconds} seconds.
      </p>
    </div>
  );
};
