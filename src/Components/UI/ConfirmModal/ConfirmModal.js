import Card from "../Card/Card";
import "./ConfirmModal.css";
import Backdrop from "../Backdrop/Backdrop";

const ConfirmModal = (props) => {
  return (
    <Backdrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <p>{props.confirmText}</p>
        </div>
        <div className="confirmButton">
          <button onClick={props.onOk}>Confirm</button>
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default ConfirmModal;
