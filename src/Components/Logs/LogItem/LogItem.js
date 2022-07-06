import React from "react";
import Card from "../../UI/Card/Card";
import Calender from "./Calender/Calender";
import "./LogItem.css";

const LogItem = (props) => {
  console.log(props.date,'123')
  return (
    <Card className="item">
     <Calender date={props.date}/>

      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
    </Card>
  );
};

export default LogItem;
