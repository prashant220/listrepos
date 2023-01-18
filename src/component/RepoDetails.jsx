import React from "react";
import { useLocation } from "react-router-dom";
import "../css/searchresult.scss";
export default function RepoDetails() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="repodetails_container">
      <div className="repodetail_header">Repository details</div>
      <div className="section">
        <div className="namelink">
          Name:
          <a href={location?.state?.data?.owner?.html_url} target="_blank">
            {location?.state?.data?.owner?.login}
          </a>
        </div>
        <div>
          Repository name:
          <a href={location?.state?.data?.html_url} target="_blank">
            {" "}
            {location?.state?.data?.full_name}
          </a>
        </div>
        <div>
          {" "}
          No. of open issues: {location?.state?.data?.open_issues_count}
        </div>
        <div> Default branch: {location?.state?.data?.default_branch}</div>
      </div>
    </div>
  );
}
