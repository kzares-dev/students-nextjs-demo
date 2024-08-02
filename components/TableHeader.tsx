import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { useContext } from "react";
import { RefreshContext } from "@/lib/context/refreshContext";

const TableHeader = ({
  searchParam,
  setSearchParam,
}: {
  searchParam: string;
  setSearchParam: (searchParam: string) => void;
}) => {
  const { dispatch } = useContext(RefreshContext);

  const onSearch = (search: string) => {
    setSearchParam(search);
    dispatch({ type: "REFRESH" })
  }
  return (
    <div className="table_header">
      <h1>Students</h1>

      <div className="table_header_content">
        <div className="input_search">
          <input
            onChange={(e) => onSearch(e.target.value)}
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
