import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = ({
  currentPage = 1,
  pageSize = 5,
  nextPage,
  previousPage,
  totalItems = 0,
}: {
  currentPage: number | undefined;
  pageSize: number | undefined;
  nextPage: number | null | undefined;
  previousPage: number | null | undefined;
  totalItems: number | undefined;
}) => {
  return (
    <div className="pagination">
      <div className="pages_info">
        <h3>Total items: {totalItems}</h3>
        <h2>
          Page {currentPage} of {Math.ceil(totalItems / pageSize)}{" "}
        </h2>
      </div>

      <div className="pagination_buttons">
        {previousPage && (
          <button>
            {" "}
            <BiChevronLeft />
            <p>{previousPage}</p>{" "}
          </button>
        )}
        {totalItems > 5 && (
          <button className="current_page"> {currentPage} </button>
        )}
        {nextPage && (
          <button>
            {" "}
            <BiChevronRight /> <p> {nextPage}</p>{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
