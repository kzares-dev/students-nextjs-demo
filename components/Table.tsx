"use client";
{
  /*
   this component must be marked as a client component 
   in order to make dinamics filtering and pagination

  */
}
import { useContext, useEffect, useState } from "react";
import { tableHead } from "@/lib/constants";
import { FaRegSquareFull } from "react-icons/fa6";
import TableHeader from "./TableHeader";
import { GetAllResponseType, StudentType } from "@/lib/types";
import ActionButtons from "./ActionButtons";
import { getStudents } from "@/lib/actions/student.action";
import Pagination from "./Pagination";
import NoFound from "./NoFound";
import TableShrimmer from "./TableShrimmer";
import { RefreshContext } from "@/lib/context/refreshContext";

const Table = () => {
  const { state } = useContext(RefreshContext);
  const [searchParam, setSearchParam] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [stateData, setStateData] = useState<GetAllResponseType>();
  const [selectedStudents, setSelectedStudents] = useState<StudentType[]>([]);
  const [promisePending, setPromisePending] = useState(true);

  /*
    this  effect tracks when the refresh context is changed of state,
    dosent matter if is set to true or false,
    you can find the login behind it on context/refreshContext,
    THE EFFECT RUNS AT:
    @ Page-Load @ Search @ Pagination
    @ Delete @ Edit @ Create /student
  */
  useEffect(() => {
    setPromisePending(true);
    setSelectedStudents([]);
    // make the function to search & paginate
    getStudents(currentPage, searchParam)
      .then((data) => {
        setPromisePending(false); // this state is triggered here, oterwise for a millisecond the shrimmer & table are both render
        setSelectedStudents(data.students);
        setStateData(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setPromisePending(false));
  }, [state]);

  // To improve code cleaning the logic to render status components
  // is made on a separate function
  function RenderStatusComponents() {
    if (promisePending) return <TableShrimmer />;
    if (!promisePending && selectedStudents.length === 0) return <NoFound />;
    else return <></>;
  }

  return (
    <section className="container">
      <TableHeader searchParam={searchParam} setSearchParam={setSearchParam} />

      <RenderStatusComponents />

      <table>
        <thead>
          <tr>
            {selectedStudents.length > 0 &&
              tableHead.map((headItem) => <th key={headItem}> {headItem} </th>)}
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

      <Pagination
        currentPage={stateData?.currentPage}
        pageSize={stateData?.pageSize}
        nextPage={stateData?.nextPage}
        previousPage={stateData?.previousPage}
        totalItems={stateData?.total}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Table;
