"use client";
import { ModalContext } from "@/lib/context/modalContext";
import { StudentType } from "@/lib/types";
import { useContext, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaPen } from "react-icons/fa6";
import DialogModal from "./DialogModal";

function ActionButtons({ student }: { student: StudentType }) {
  const { dispatch } = useContext(ModalContext);
  const [openDialogModal, setOpenDialogModal] = useState(false);

  const clickOnEdit = () => {
    dispatch({ type: "EDIT_STUDENT", student: student });
  };

  const clickOnDelete = () => {
    setOpenDialogModal(!openDialogModal);
  };
  return (
    <td className="buttons">
      {openDialogModal && (
        <DialogModal
          studentId={student._id}
          onCloseDialog={() => setOpenDialogModal(false)}
        />
      )}
      <FaPen onClick={clickOnEdit} color="green" />
      <BiTrash onClick={clickOnDelete} color="red" />
    </td>
  );
}

export default ActionButtons;
