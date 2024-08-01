"use client"
{/*
   this component must be marked as a client component 
   in order to make dinamics filtering and pagination

  */}
import { useEffect, useState } from "react";
import { tableHead } from "@/lib/constants";
import { FaRegSquareFull } from "react-icons/fa6";
import TableHeader from "./TableHeader";
import { StudentType } from "@/lib/types";
import ActionButtons from "./ActionButtons";

const Table = ({ students }: { students: StudentType[] }) => {
  const [selectedStudents, setSelectedStudents] = useState(students);
  const [searchParam, setSearchParam] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // make the function to search
  }, [searchParam])

  useEffect(() => {
    // make the funcion to paginate
  }, [currentPage])
  
  return (
    <section className="container">
      <TableHeader 
      searchParam={searchParam}
      setSearchParam={setSearchParam}
      />

      <table>
        <thead>
          <tr>
            {tableHead.map((headItem) => (
              <th key={headItem}> {headItem} </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {selectedStudents.map((student, idx) => (
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
