import React, { useState } from "react";
import "./hooks.css";
import CommonLeftComponent from "./CommonLeftComponent";

import { data } from "./data/hooks-data";

const ProgressBarComponent = ({ width: val }) => {
  return (
    <div className="progress-container-main">
      {val >= 0 && val <= 100 ? (
        <div className="inner-container" style={{ width: `${val}%` }}>
          {val}%
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const ProgressBar = () => {
  const progressBar = data.filter((item) => item.id === 4)[0];

  const [value, setValue] = useState(0);

  function handleChange(e) {
    setValue(Number(e.target.value));
  }
  return (
    <div>
      <div className="common-container">
        <CommonLeftComponent data={progressBar} />
        <div className="right-content">
          <h2>Implementation (Add Percentage)</h2>

          <div className="percent-container">
            <h1>Progress Bar</h1>
            <ProgressBarComponent width={value} />
            <form>
              <label for="html">Input Percentage:</label>
              <input
                className="percent-input-class"
                type="number"
                onChange={(e) => handleChange(e)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
