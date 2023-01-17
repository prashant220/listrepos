import React, { useState, useEffect } from "react";
import "../css/searchresult.scss";
import "../css/landing.scss";
import { FaGithub } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useParams } from "react-router";
import { search_repo } from "../api/apicall";
import SearchResult from "./SearchResult";
import DropdownItems from "./DropdownItems";

export default function Search() {
  let { repo } = useParams();
  const [data, setData] = useState("");
  const [filteredResults, setFilteredResults] = useState(null);

  useEffect(() => {
    async function get_all_repos() {
      const res = await search_repo(repo);
      setData(res?.data);
      console.log(res);
    }
    get_all_repos();
  }, [repo]);
  return (
    <div className="searchresult_container">
      <div className="searchresult_header">
        <div className="icons">
          <div>
            <FaGithub size={36} />
          </div>
          <div>
            <SearchBar placeholder="Search..." value={repo} />
          </div>
          <div>
            <DropdownItems />
          </div>
        </div>
      </div>
      <SearchResult data={data} />
    </div>
  );
}
