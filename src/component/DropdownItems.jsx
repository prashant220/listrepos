import React from "react";
import { Form } from "react-bootstrap";
import "../css/searchresult.scss";

export default function DropdownItems({
  setPerPage,
  sortOptions,
  orderOptions,
  setSort,
  setOrder,
}) {
  const handlePerPageChange = (e) => {
    setPerPage(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  console.log(sortOptions);
  return (
    <div style={{ display: "flex", gap: "25px" }}>
      <Form.Select
        aria-label="Default select example"
        id="form-div"
        onChange={(e) => handlePerPageChange(e)}
      >
        <option value="10" selected>
          {" "}
          10 per page
        </option>
        <option value="25"> 25 per page</option>
        <option value="50"> 50 per page</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        id="form-div"
        onChange={(e) => handleSortChange(e)}
      >
        {sortOptions.map((item) => {
          return <option value={item.sort}> {item.label}</option>;
        })}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        id="form-div"
        onChange={(e) => handleOrderChange(e)}
      >
        {orderOptions.map((item) => {
          return <option value={item.sort}> {item.label}</option>;
        })}
      </Form.Select>
    </div>
  );
}
