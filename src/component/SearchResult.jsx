import React from "react";
import { GoStar as StarIcon, GoRepoForked as ForkIcon } from "react-icons/go";
import { Link } from "react-router-dom";

export default function SearchResult({ data }) {
  console.log(data);
  const handleSubmit = () => {};
  return (
    <div className="list_container">
      {Object.entries(data).map(([key, value]) => {
        return (
          <Link
            to={{
              pathname: `/repos/${value?.owner?.login}/${value?.name}`,
            }}
            state={{ data: value }}
          >
            <div className="list_repo">
              <a>{value?.full_name}</a>
              <div className="description">
                {value?.description && value?.description}
              </div>
              <div className="details">
                <div className="stars">
                  <StarIcon />
                  {value?.stargazers_count ? value?.stargazers_count : 0}
                </div>
                <div className="forks">
                  <ForkIcon />
                  {value?.forks_count ? value?.forks_count : 0}
                </div>
                <div className="updated_at">{value?.updated_at}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
