import React, { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  var id = useRef(null);

  useEffect(() => {
    start();

    return () => {
      clearInterval(id);
    };
  }, []);

  const start = () => {
    id = setInterval(() => {
      setSecond((prev) => {
        if (prev < 59) {
          return prev + 1;
        } else {
          setMinute(() => {
            return minute + 1;
          });
          setSecond(0);
        }
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(id);
  };

  const reset = () => {
    setMinute(0);
    setSecond(0);
  };

  return (
    <div>
      <h2>
        {minute < 10 ? "0" + minute + "m" : minute + "m"} :{" "}
        {second < 10 ? "0" + second + "s" : second + "s"}
      </h2>
      <button
        onClick={() => {
          start();
        }}
      >
        Start
      </button>
      <button onClick={() => pause()}>Pause</button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};
