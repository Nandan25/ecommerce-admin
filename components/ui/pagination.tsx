import React from "react";

type PaginationProps = {
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({
  handlePageChange,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-3 py-1 text-sm rounded ${
            currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
