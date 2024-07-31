import { tableHead } from "@/lib/constants";
import { FaRegSquareFull } from "react-icons/fa6";
import TableHeader from "./TableHeader";

const Table = () => {
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
          <tr>
            <td> <FaRegSquareFull color="#444" /> </td>
            <td>John Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>A {/* TODO: icons for delete and edit */}B</td>
          </tr>
          <tr>
            <td> <FaRegSquareFull /> </td>
            <td>John Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>A {/* TODO: icons for delete and edit */}B</td>
          </tr>
          <tr>
            <td> <FaRegSquareFull /> </td>
            <td>John Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>A {/* TODO: icons for delete and edit */}B</td>
          </tr>
          <tr>
            <td> <FaRegSquareFull /> </td>
            <td>John Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>A {/* TODO: icons for delete and edit */}B</td>
          </tr>
          <tr>
            <td> <FaRegSquareFull /> </td>
            <td>John Deo</td>
            <td>johndeo@gmail.com</td>
            <td>12</td>
            <td>2</td>
            <td>A {/* TODO: icons for delete and edit */}B</td>
          </tr>
        </tbody>
      </table>

      
    </section>
  );
};

export default Table;
