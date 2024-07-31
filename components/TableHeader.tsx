import { CiSearch } from "react-icons/ci";
import Button from "./Button";

const TableHeader = () => {
  return (
    <div className="table_header">
      <h1>Students</h1>

      <div className="table_header_content">

        <div className="input_search">
          <input className="input" type="search" placeholder="Search..." />
          <CiSearch />
        </div>
        <Button type="navbar" > Create Student </Button>
      </div>
    </div>
  );
};

export default TableHeader;
