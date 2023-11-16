import React, { useState } from "react";
import "./hooks.css";
import CommonLeftComponent from "./CommonLeftComponent";

import { data } from "./data/hooks-data";

const Stopwatch = () => {
  const[ second, setSecond] = useState(0);

  // let timer;
  function handleStart(){
    window.timer = setInterval(() => {
      setSecond((second) => second + 1)
    }, 1000);
  }

  function handleStop() {
    clearInterval(window.timer);
  }

  function handleReset() {
    clearInterval(window.timer);
    setSecond(0);
  }

  const stopWatch = data.filter((item) => item.id === 2)[0];
  return (
    <div className="common-container">
      <CommonLeftComponent data={stopWatch} />
      <div className="right-content">
        <h2>Implementation (Click the buttons)</h2>
        <div className="element-container">
          <h1>Timer</h1>
          <h3>{`${Math.trunc(second / 60)} mins ${second % 60} sec`}</h3>
          <button onClick={() => handleStart()} className="timer-button start">
            Start
          </button>
          <button onClick={() => handleStop()} className="timer-button stop">
            Stop
          </button>
          <button onClick={() => handleReset()} className="timer-button reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
