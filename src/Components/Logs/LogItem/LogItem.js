import React from "react";
import Card from "../../UI/Card/Card";
import Calender from "./Calender/Calender";
import "./LogItem.css";

const LogItem = (props) => {
  const deleteHandler = () => {
    const isDel = window.confirm(
      "This action cannot be resumed, confirm execution?"
    );
    if (isDel) {
      alert("delete!");
      // console.log(props.onDelLog);
      props.onDelLog();
    }
  };

  return (
    <Card className="item">
      <Calender date={props.date} />

      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}min</div>
      </div>
      <div>
        <div onClick={deleteHandler} className="delete">
          X
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
