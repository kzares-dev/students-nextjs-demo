import { CiSearch } from "react-icons/ci";
import Button from "./Button";

const TableHeader = ({
  searchParam,
  setSearchParam,
}: {
  searchParam: string;
  setSearchParam: (searchParam: string) => void;
}) => {
  return (
    <div className="table_header">
      <h1>Students</h1>

      <div className="table_header_content">
        <div className="input_search">
          <input
            onChange={(e) => setSearchParam(e.target.value)}
            value={searchParam}
            className="input"
            type="search"
            placeholder="Search..."
          />
          <CiSearch />
        </div>
        <Button type="navbar"> Create Student </Button>
      </div>
    </div>
  );
};

export default TableHeader;
