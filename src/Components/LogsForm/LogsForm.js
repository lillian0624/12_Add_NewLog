import React from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";
import { useState } from "react";

const LogsForm = () => {
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTime, setInputTime] = useState("");

  const dateChangeHandler = (e) => {
    // console.loge(e.target.value);
    setInputDate(e.target.value);
  };

  const descChangeHandler = (e) => {
    //    console.log(e.target.value);
    setInputDesc(e.target.value);
  };

  const timeChangeHandler = (e) => {
    // console.log(e.target.value);
    setInputTime(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    //  console.log('form has been submited');

    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };

    setInputDate("");
    setInputDesc("");
    setInputTime("");

    console.log(newLog);
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">date</label>
          <input
            onChange={dateChangeHandler}
            value={inputDate}
            id="date"
            type="date"
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">discription</label>
          <input
            onChange={descChangeHandler}
            value={inputDesc}
            id="desc"
            type="text"
          />
        </div>
        <div className="form-item">
          <label htmlFor="time">time</label>
          <input
            onChange={timeChangeHandler}
            value={inputTime}
            id="time"
            type="number"
          />
        </div>
        <div className="form-btn">
          <button>add item</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
