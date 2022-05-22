import React, { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const id = useRef(null);

  const handleValue = (value) => {
    setTimer(value);
  };

  useEffect(() => {
    start();

    return () => {
      console.log("Unmounted Timer");
      clearInterval(id.timer);
    };
  }, []);

  const start = () => {
    id.timer = setInterval(() => {
      setTimer((prev) => {
        if (prev >= 1) {
          return prev - 1;
        } else {
          setTimer(0);
          clearInterval(id.timer);
        }
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(id.timer);
  };

  const reset = () => {
    setTimer(0);
  };

  return (
    <div>
      <h2>Timer : {timer}s</h2>
      <input
        type="number"
        onChange={(e) => {
          handleValue(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          start();
        }}
      >
        Start
      </button>
      <button onClick={() => stop()}>Pause</button>
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
