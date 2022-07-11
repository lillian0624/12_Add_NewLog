import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import Calender from "./Calender/Calender";
import "./LogItem.css";

const LogItem = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteHandler = () => {
    setShowConfirm(true);
    // const isDel = window.confirm(
    //   "This action cannot be resumed, confirm execution?"
    // );
    // if (isDel) {
    //   alert("delete!");
    //   // console.log(props.onDelLog);
    //   props.onDelLog();
    // }
  };

  const cancelHandler = () => {
    setShowConfirm(false);
  };

  const okHandler = () => {
    props.onDelLog();
  };

  return (
    <Card className="item">
      {showConfirm && (
        <ConfirmModal
          confirmText="This operation is not recoverable! Are you sure?"
          onOk={okHandler}
          onCancel={cancelHandler}
        />
      )}

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
