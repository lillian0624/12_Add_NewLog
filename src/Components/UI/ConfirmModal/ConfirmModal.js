import Card from "../Card/Card";
import "./ConfirmModal.css";

const ConfirmModal = (props) => {
  return (
    <Card className="confirmModal">
      <div className="confirmText">
        <p>This operation is not recoverable! Are you sure?</p>
      </div>
      <div className="confirmButton">
        <button className="okButton">Confirm</button>
        <button>Cancel</button>
      </div>
    </Card>
  );
};

export default ConfirmModal;
