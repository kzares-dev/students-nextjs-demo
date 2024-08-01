import React from "react";

const DialogModal = ({
  onCloseDialog,
  studentId
} : {
  onCloseDialog: () => void,
  studentId: string
}) => {
  return (
    <div className="modal dialog">
      <div className="container">
        <h1>Do you want to remove the student. This action is irreversible</h1>
        
        <div className="button_container">
          <button onClick={onCloseDialog} className="btn_exit">Cancel</button>
          <button className="btn_primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DialogModal;
