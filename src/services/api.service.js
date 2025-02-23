import axios from "./axios.customize";

const createUserAPI = (name, email, password, city) => {
  const URL_BACKEND = "/v1/api/users";
  const data = { name, email, password, city };
  return axios.post(URL_BACKEND, data);
};

const fetchAllUserAPI = () => {
  const URL_BACKEND = "/v1/api/users";
  return axios.get(URL_BACKEND);
};

const updateUserAPI = () => {};

export { createUserAPI, fetchAllUserAPI, updateUserAPI };
