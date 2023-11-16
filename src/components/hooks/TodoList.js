import React, { useState } from "react";
import "./hooks.css";
import CommonLeftComponent from "./CommonLeftComponent";

import { data } from "./data/hooks-data";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const toDoList = data.filter((item) => item.id === 3)[0];

  function handleInput(e) {
    setValue(e.target.value);
  }

  function addItem() {
    let arr = [...list];
    arr.push(value);
    setList(arr);
    setValue("");
  }

  function removeItem(index) {
    let newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr);
  }

  return (
    <div className="common-container">
      <CommonLeftComponent data={toDoList} />
      <div className="right-content">
        <h2>Implementation (Add & Remove items)</h2>

        <div className="todo-container">
          <input
            className="todo-input"
            type="text"
            value={value}
            placeholder="Add City"
            onChange={(e) => handleInput(e)}
          ></input>
          <button className="add-item" onClick={() => addItem()}>
            Add
          </button>

          {list.length > 0 ? (
            <div className="display-list">
              {list.map((item, index) => {
                return (
                  <ul>
                    <div className="list-items">
                      <li key={index}>{item}</li>
                      <button className="remove-btn" onClick={() => removeItem(index)}>X</button>
                    </div>
                  </ul>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
