import React, { useEffect, useState } from "react";

export function useTimer(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds: number) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return seconds;
}

export function Timer() {
  const seconds = useTimer(0);

  return (
    <div>
      <p className="timer-text">
        You have been on this page for {seconds} seconds.
      </p>
    </div>
  );
}
