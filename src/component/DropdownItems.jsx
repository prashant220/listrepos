import React from "react";
import { Form } from "react-bootstrap";
import "../css/searchresult.scss";

export default function DropdownItems() {
  return (
    <div>
      <Form.Select aria-label="Default select example" id="form-div">
        <option value="5">Show 5 per page</option>
        <option value="10" selected>
          Show 10 per page
        </option>
      </Form.Select>
    </div>
  );
}
