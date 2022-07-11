import Card from "../Card/Card";
import "./ConfirmModal.css";

const ConfirmModal = (props) => {
  return (
    <Card className="confirmModal">
      <div className="confirmText">
        <p>{props.confirmText}</p>
      </div>
      <div className="confirmButton">
        <button onClick={props.onOk}>Confirm</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </Card>
  );
};

export default ConfirmModal;
