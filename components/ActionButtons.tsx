"use client";
import { ModalContext } from "@/lib/context";
import { StudentType } from "@/lib/types";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { FaPen } from "react-icons/fa6";

function ActionButtons({ student } : { student: StudentType}) {
  const { state, dispatch } = useContext(ModalContext);

  const clickOnDelete = () => {
    dispatch({ type: 'EDIT_STUDENT', student: student })
  }
  return (
    <td className="buttons">
      <FaPen onClick={clickOnDelete} color="green" />
      <BiTrash color="red"  />
    </td>
  );
}

export default ActionButtons;
