import React, { useState } from "react";
import "./hooks.css";
import CommonLeftComponent from "./CommonLeftComponent";

import {data} from './data/hooks-data';

const ShowHideTitle = () => {
  const [showText, setShow] = useState(false);
  const showHideData = data.filter((item) => item.id === 1)[0];
  return (
    <div className="common-container">
      <CommonLeftComponent data={showHideData} />
      <div className="right-content">
        <h2>Implementation (Click the button)</h2>
        <div className="btn-container">
          <button
            onClick={() => setShow(!showText)}
            className="show-hide-button"
          >
            Show / Hide{" "}
          </button>
          {showText ? (
            <h1 className="text-class">Welcome to React Challenges</h1>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowHideTitle;
