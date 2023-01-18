import React from "react";
import "../css/landing.scss";
import { Link, useHistory, useNavigate, withRouter } from "react-router-dom";

import { GoMarkGithub as GithubIcon } from "react-icons/go";
import SearchBar from "./SearchBar";

export default function Landing() {
  const navigate = useNavigate();

  //Route to Search component on submit and update url params with input value
  const routeChange = (input) => {
    let path = `/search/${input}`;
    navigate(path);
  };

  return (
    <div className="landing_container">
      <div className="wrapper">
        <h1>
          <GithubIcon /> Github Repository Search
        </h1>
        <SearchBar onSubmit={routeChange} placeholder="Search..." />
      </div>
    </div>
  );
}
