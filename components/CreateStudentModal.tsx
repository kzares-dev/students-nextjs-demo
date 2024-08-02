"use client";
import Image from "next/image";
import avatar from "@/public/avatar.gif";
import Button from "./Button";
import { MdAlternateEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbNumber } from "react-icons/tb";
import { createStudent, editStudent } from "@/lib/actions/student.action";
import Loader from "./Loader";
import { StudentType } from "@/lib/types";
import { FormEvent, use, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ModalContext } from "@/lib/context/modalContext";
import { RefreshContext } from "@/lib/context/refreshContext";

const CreateStudentModal = ({
  student,
  edit,
}: {
  student?: StudentType;
  edit: boolean;
}) => {
  // the creation of this object is mandatory, in other case the creation of new student will throw an error
  const defaultStudent = {
    firstName: student?.firstName,
    lastName: student?.lastName,
    email: student?.email,
    age: student?.age,
    grade: student?.grade,
  };
  const [isPending, setIsPending] = useState(false);
  const { dispatch: modalDispatch } = useContext(ModalContext);
  const { dispatch, state } = useContext(RefreshContext);

  // This function increases code readability, making it easier to maintain and debug.
  const selectPromise = async (formData: FormData) =>
    edit ? await editStudent(formData, student!._id) : await createStudent(formData);

  // Call for corresponding server action, trigger refresh if request is succesfull
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    console.log(state)
    
    const formData = new FormData(event.currentTarget);
    await selectPromise(formData)
    .then(() => {
      toast.success(`Student ${edit ? "edited" : "created"}`);
      modalDispatch({ type: "TOGGLE_MODAL" });
      dispatch({ type: "REFRESH"})
      })
      .catch(() => {
        toast.error(`Error ${edit ? "editing" : "creating"} student `);
        setIsPending(false);
      })
      .finally(() => setIsPending(false));
  }

  return (
    <section className="modal">
      <div className="container">
        <div className="icon_section">
          <span>
            <Image src={avatar} alt="" width={150} height={150} />
          </span>
        </div>

        <form onSubmit={onSubmit}>
          <h1>
            {edit ? "Edit" : "Create"} <span>Student</span>{" "}
          </h1>
          <div className="input">
            <MdDriveFileRenameOutline />
            <input
              defaultValue={defaultStudent.firstName}
              name="firstName"
              type="text"
              placeholder="First Name..."
              required
            />
          </div>

          <div className="input">
            <MdDriveFileRenameOutline />
            <input
              defaultValue={defaultStudent.lastName}
              name="lastName"
              type="text"
              placeholder="Last Name..."
              required
            />
          </div>

          <div className="input">
            <MdAlternateEmail />
            <input
              defaultValue={defaultStudent.email}
              name="email"
              type="email"
              placeholder="Email..."
              required
            />
          </div>
          <div className="input">
            <TbNumber />
            <input
              defaultValue={defaultStudent.age}
              name="age"
              type="number"
              placeholder="Age"
              required
            />
          </div>
          <div className="input">
            <TbNumber />

            <div defaultValue={defaultStudent.grade} className="select">
              <label htmlFor="grade-select">Select a Grade:</label>
              <select id="grade-select" name="grade">
                <option value="1">1st Grade</option>
                <option value="2">2nd Grade</option>
                <option value="3">3rd Grade</option>
                <option value="4">4th Grade</option>
                <option value="5">5th Grade</option>
                <option value="6">6th Grade</option>
                <option value="7">7th Grade</option>
                <option value="8">8th Grade</option>
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
                <option value="11">11th Grade</option>
                <option value="12">12th Grade</option>
              </select>
            </div>
          </div>

          <div className="button_container">
            <Button type="exit">Cancel</Button>
            <Loader text={edit ? "Edit" : "Create"} pending={isPending} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateStudentModal;
