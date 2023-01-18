import React, { useState } from "react";

export default function Pagination({
  paginatedBtn,
  handlePageChange,
  page,
  setPerPage,
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="pagination">
      {Array(paginatedBtn)
        .fill(0)
        .map((_, i) => (
          <button
            className={page === i + 1 ? "active" : "pagination_button"}
            key={i + 1}
            onClick={() => {
              setActive(true);
              handlePageChange(i + 1);
            }}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
}
