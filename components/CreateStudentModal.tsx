import Image from "next/image";
import avatar from "@/public/avatar.gif";
import Button from "./Button";

import { MdAlternateEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbNumber } from "react-icons/tb";

const CreateStudentModal = () => {
  return (
    <section className="create_student">

      <div className="container">
        <div className="icon_section">
          <span>
            <Image src={avatar} alt="" width={150} height={150} />
          </span>
        </div>

        <form>
          <div className="input">
            <MdDriveFileRenameOutline />
            <input type="text" placeholder="First Name..." />
          </div>

          <div className="input">
            <MdDriveFileRenameOutline />
            <input type="text" placeholder="Last Name..." />
          </div>

          <div className="input">
            <MdAlternateEmail />
            <input type="email" placeholder="Email..." />
          </div>
          <div className="input">
            <TbNumber />
            <input type="number" placeholder="Age" />
          </div>
          <div className="input">
            <TbNumber />

            <div className="select">
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
            <Button type="exit" >Cancel</Button>
            <Button type="submit"> Create </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateStudentModal;
