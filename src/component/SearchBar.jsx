import React, { useState } from "react";
import "../css/landing.scss";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useHistory, useNavigate, withRouter } from "react-router-dom";

export default function SearchBar({ value = "", onSubmit }) {
  const [input, setInput] = useState(value);
  let navigate = useNavigate();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const routeChange = (input) => {
    let path = `/search/${input}`;
    navigate(path);
  };

  const handleSubmit = () => {
    routeChange(input);
    onSubmit(input);
  };
  //trigger handleSubmit only when enter button is pressed within search input field or search icon is clicked
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.currentTarget.title === "search") {
      input ? handleSubmit() : alert("Please enter search term to get results");
    }
  };

  return (
    <div className="searchbar_container">
      {" "}
      <input
        type="text"
        value={input || ""}
        placeholder={"Search..."}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <div className="icon">
        {input && <MdClear value="" onClick={handleInput} />}
      </div>
      <div className="icon" onClick={handleSubmit}>
        <FaSearch />
      </div>
    </div>
  );
}
