import { tableHead } from "@/lib/constants";
import { FaDeleteLeft, FaPen, FaRegSquareFull } from "react-icons/fa6";
import TableHeader from "./TableHeader";
import { BiTrash } from "react-icons/bi";
import { StudentType } from "@/lib/tyoes";

const Table = ({ students }: { students: StudentType[] }) => {
  return (
    <section className="container">
      <TableHeader />

      <table>
        <thead>
          <tr>
            {tableHead.map((headItem) => (
              <th key={headItem}> {headItem} </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {students.map((student, idx) => (
            <tr>
              <td>
                <FaRegSquareFull />
              </td>
              <td>{student.firstName} {student.lastName} </td>
              <td> {student.email} </td>
              <td> {student.grade} </td>
              <td> {student.age} y/o</td>
              <td className="buttons">
                <FaPen color="green" />
                <BiTrash color="red" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
