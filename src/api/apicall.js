import axios from "axios";
// import { baseUrl } from "../constants/defaultValue";

export const base = () => {
  const data = {
    baseURL: `https://api.github.com/`,
    headers: {
      "content-type": "application/json",
    },
  };
  return axios.create(data);
};
//get users repo from query

export const search_repo = async (item) => {
  return await base()
    .get(`search/repositories?q=${item}`)

    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
