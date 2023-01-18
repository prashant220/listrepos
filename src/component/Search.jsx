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
import Error from "./Error";
export default function Search() {
  let { repo } = useParams();
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState("10");
  const [paginatedBtn, setPaginatedBtn] = useState(0);
  const [list, setList] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function get_all_repos() {
      const res = await search_repo(repo, page, perPage, order, sort);
      if (res?.status === 200) {
        setList(res?.data);
        setLoading(false);
        setData(res?.data?.items);
        setLoading(false);
        console.log(res);
      } else {
        setLoading(false);
      }
    }
    get_all_repos();
  }, [repo, page, perPage, order, sort, loading]);

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
  return loading ? (
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h1>
  ) : (
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
              loading={loading}
              setLoading={setLoading}
              setPerPage={setPerPage}
              setOrder={setOrder}
              setSort={setSort}
              sortOptions={sortOptions}
              orderOptions={orderOptions}
            />
          </div>
        </div>
      </div>
      {list?.total_count > 0 ? <SearchResult data={data} /> : <Error />}
      {list?.total_count > 0 && (
        <Pagination
          handlePageChange={(pageNum) => handlePageChange(pageNum)}
          paginatedBtn={paginatedBtn}
          page={page}
          setPerPage={setPerPage}
        />
      )}
    </div>
  );
}
