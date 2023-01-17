import React from "react";
import { GoStar as StarIcon, GoRepoForked as ForkIcon } from "react-icons/go";

export default function SearchResult({ data }) {
  return (
    <div className="list_container">
      {Object.entries(data?.items).map(([key, value]) => {
        console.log(value);

        return (
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
        );
      })}
    </div>
  );
}
