import React from "react";
import "./Calender.css";

const Calender = (props) => {
  const month = props.date.toLocaleString('zh-CN', {month:'long'});
  const date = props.date.getDate();
  return (
   
      <div className="date">
        <div className="month">
        {month}
        </div>
        <div className="day">
          {date}
        </div>
      </div>

  );
};

export default Calender;