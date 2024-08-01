"use client";
{
  /*
   this component must be marked as a client component 
   in order to make dinamics filtering and pagination

  */
}
import { useEffect, useState } from "react";
import { tableHead } from "@/lib/constants";
import { FaRegSquareFull } from "react-icons/fa6";
import TableHeader from "./TableHeader";
import { GetAllResponseType, StudentType } from "@/lib/types";
import ActionButtons from "./ActionButtons";
import { getStudents } from "@/lib/actions/student.action";
import Pagination from "./Pagination";
import NoFound from "./NoFound";
import TableShrimmer from "./TableShrimmer";

const Table = () => {
  const [selectedStudents, setSelectedStudents] = useState<StudentType[]>([]);
  const [searchParam, setSearchParam] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [promisePending, setPromisePending] = useState(true);
  const [stateData, setStateData] = useState<GetAllResponseType>();

  useEffect(() => {
    setSelectedStudents([])
    setPromisePending(true)
    // make the function to search & paginate
    getStudents(currentPage, searchParam)
      .then((data) => {
        console.log(data);
        setSelectedStudents(data.students);
        setStateData(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setPromisePending(false));
  }, [searchParam, currentPage]);

  useEffect(() => {}, [currentPage]);

  return (
    <section className="container">
      <TableHeader searchParam={searchParam} setSearchParam={setSearchParam} />

      {
        !promisePending && selectedStudents.length === 0 && <NoFound />
      }

      {
      // Render a placeholder to indicate the request is been made
      promisePending && <TableShrimmer />}

      {
      // Render the students when request is completed
      selectedStudents.length > 0 && (
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
                <td>
                  {student.firstName} {student.lastName}{" "}
                </td>
                <td> {student.email} </td>
                <td> {student.grade} </td>
                <td> {student.age} y/o</td>
                <ActionButtons student={student} />
              </tr>
            ))}
          </tbody>
        </table>
      ) }

      {selectedStudents.length > 0  && (
        <Pagination
          currentPage={stateData?.currentPage}
          pageSize={stateData?.pageSize}
          nextPage={stateData?.nextPage}
          previousPage={stateData?.previousPage}
          totalItems={stateData?.total}
        />
      )}
    </section>
  );
};

export default Table;
