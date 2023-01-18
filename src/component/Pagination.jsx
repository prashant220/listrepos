import React from "react";

export default function Pagination({
  paginatedBtn,
  handlePageChange,
  setPerPage,
}) {
  return (
    <div className="pagination">
      {Array(paginatedBtn)
        .fill(0)
        .map((_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
    </div>
  );
}
