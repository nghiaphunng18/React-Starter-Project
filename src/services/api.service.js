import axios from "./axios.customize";

const createUserAPI = (name, email, password, city) => {
  const URL_BACKEND = "/v1/api/users";
  const data = { name, email, password, city };
  return axios.post(URL_BACKEND, data);
};

const updateUserAPI = (userId, name, email, city) => {
  const URL_BACKEND = "/v1/api/users";
  const data = { userId, name, email, city };
  return axios.put(URL_BACKEND, data);
};

const fetchAllUserAPI = () => {
  const URL_BACKEND = "/v1/api/users";
  return axios.get(URL_BACKEND);
};

const deleteUserAPI = (id) => {
  const URL_BACKEND = `/v1/api/users/${id}`;
  return axios.delete(URL_BACKEND);
};

const registerUserAPI = (fullname, email, password, phone) => {
  const URL_BACKEND = `v1/api/users/regiser`;
  const data = {
    fullname,
    email,
    password,
    phone,
  };

  return axios.post(URL_BACKEND, data);
};

export {
  createUserAPI,
  fetchAllUserAPI,
  updateUserAPI,
  deleteUserAPI,
  registerUserAPI,
};
