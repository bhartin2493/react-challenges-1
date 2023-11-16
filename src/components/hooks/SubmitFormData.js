import React, { useState } from "react";
import "./hooks.css";
import CommonLeftComponent from "./CommonLeftComponent";

import { data } from "./data/hooks-data";

const SubmitFormData = () => {
  const formData = data.filter((item) => item.id === 5)[0];

  const [formValues, setFormValues] = useState({
    username: "",
    fullname: "",
    age: 0,
  });

  const [show, setShow] = useState(false);

  function handleChange(e) {
    let temp = { ...formValues };

    temp[e.target.name] = e.target.value;

    setFormValues(temp);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
  }

  return (
    <div className="common-container">
      <CommonLeftComponent data={formData} />
      <div className="right-content">
        <h2>Implementation (Submit and display form data)</h2>
        <form className="user-form">
          <h2>Username :</h2>
          <input
            className="input-btn"
            value={formValues.username}
            name="username"
            type="text"
            onChange={(e) => handleChange(e)}
          ></input>

          <h2>Fullname :</h2>
          <input
            className="input-btn"
            value={formValues.fullname}
            name="fullname"
            type="text"
            onChange={(e) => handleChange(e)}
          ></input>

          <h2>Age :</h2>
          <input
            value={formValues.age}
            className="input-btn"
            type="number"
            name="age"
            onChange={(e) => handleChange(e)}
          ></input>

          <div>
            <button
              className="form-submit-btn"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </form>

        {show ? (
          <div className="display-data">
            <h2>Request sent to DB with below data</h2>

            <ul>
              <li>{`Username : ${formValues.username.toUpperCase()}`}</li>
              <li>{`FullName : ${formValues.fullname.toUpperCase()}`}</li>
              <li>{`Age : ${formValues.age}`}</li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SubmitFormData;
