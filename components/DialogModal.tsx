"use client";
import { deleteStudent } from "@/lib/actions/student.action";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { ModalContext } from "@/lib/context";

const DialogModal = ({
  onCloseDialog,
  studentId,
}: {
  onCloseDialog: () => void;
  studentId: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(ModalContext);
  const clickOnDelete = async () => {
    setIsLoading(true);

    await deleteStudent(studentId)
      .then(() => {
        dispatch({type: "REFRESH"})
        toast.success("Student Removed");
        onCloseDialog();
      })
      .catch(() => toast.error("Failed to remove student"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="modal dialog">
      <div className="container">
        <h1>Do you want to remove the student. This action is irreversible</h1>

        <div className="button_container">
          <button onClick={onCloseDialog} className="btn_exit">
            Cancel
          </button>
          <Loader text="Delete" onClick={clickOnDelete} pending={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default DialogModal;
