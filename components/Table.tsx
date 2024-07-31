import { tableHead } from "@/lib/constants";
import { FaRegSquareFull } from "react-icons/fa6";
import TableHeader from "./TableHeader";
import { StudentType } from "@/lib/types";
import ActionButtons from "./ActionButtons";

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
            <tr key={student.firstName + idx}>
              <td>
                <FaRegSquareFull />
              </td>
              <td>{student.firstName} {student.lastName} </td>
              <td> {student.email} </td>
              <td> {student.grade} </td>
              <td> {student.age} y/o</td>
              <ActionButtons  student={student} />
              
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
