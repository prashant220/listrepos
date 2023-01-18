import React, { useState, useEffect } from "react";
import "../css/searchresult.scss";
import "../css/landing.scss";
import { FaGithub } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useParams } from "react-router";
import { search_repo } from "../api/apicall";
import SearchResult from "./SearchResult";
import DropdownItems from "./DropdownItems";
import Pagination from "./Pagination";
import {
  GoChevronLeft as LeftIcon,
  GoChevronRight as RightIcon,
} from "react-icons/go";
export default function Search() {
  let { repo } = useParams();
  const [data, setData] = useState("");
  const [page, setPage] = useState("1");
  const [perPage, setPerPage] = useState("10");
  const [paginatedBtn, setPaginatedBtn] = useState(0);
  const [list, setList] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  useEffect(() => {
    async function get_all_repos() {
      const res = await search_repo(repo, page, perPage, order, sort);
      setList(res?.data);
      setData(res?.data?.items);
      console.log(res);
    }
    get_all_repos();
  }, [repo, page, perPage, order, sort]);

  const sortOptions = [
    { label: "Best match", sort: "" },
    { label: "Created", sort: "created" },
    { label: "Updated", sort: "updated" },
    { label: "Pushed", sort: "pushed" },
    { label: "Full name", sort: "full_name" },
  ];
  const orderOptions = [
    { label: "Select", sort: "" },

    { label: "Ascending", sort: "asc" },
    { label: "Descending", sort: "dsc" },
  ];
  //getting page and per page
  useEffect(() => {
    if (Object.keys(list || {}) && list?.items?.length > 0) {
      if (list?.total_count <= 100) {
        setPaginatedBtn(Math.ceil(list?.total_count / perPage));
      } else {
        setPaginatedBtn(5);
      }
    }
  }, [list]);
  console.log(paginatedBtn);

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  console.log(page);
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
            <DropdownItems
              setPerPage={setPerPage}
              setOrder={setOrder}
              setSort={setSort}
              sortOptions={sortOptions}
              orderOptions={orderOptions}
            />
          </div>
        </div>
      </div>
      <SearchResult data={data} />
      {/* <div className="pagination">
        <div className="icons_pagination">
          <LeftIcon />
          Prev
        </div>
        Page
        <div className="icons_pagination">
          <RightIcon />
          Next
        </div>
      </div> */}
      <Pagination
        handlePageChange={(pageNum) => handlePageChange(pageNum)}
        paginatedBtn={paginatedBtn}
        setPerPage={setPerPage}
      />
    </div>
  );
}
