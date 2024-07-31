import { CiSearch } from "react-icons/ci";

const TableHeader = () => {
  return (
    <div className="table_header">
      <h1>Students</h1>
      
      <div className="input_search">
        <input className="input" type="search" placeholder="Search..." />
        <CiSearch />
      </div>
    </div>
  );
};

export default TableHeader;
