import axios from "axios";

const instance = axios.create({
  baseURL: "https:localhost:8080",
});

//add a request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// add a response interceptor
instance.interceptors.use(
  function (response) {
    if (response.data && response.data.data) return response.data;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
