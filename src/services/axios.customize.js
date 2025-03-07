import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

//add a request interceptor
instance.interceptors.request.use(
  function (config) {
    if (
      typeof window !== "undefined" &&
      window &&
      window.localStorage &&
      window.localStorage.getItem("access_token")
    ) {
      config.headers.Authorization =
        "Bearer " + window.localStorage.getItem("access_token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// add a response interceptor
instance.interceptors.response.use(
  function (response) {
    if (response.data && response.data.data) return response.data;
    return response;
  },
  function (error) {
    //return error from backend
    if (error.response && error.response.data) return error.response.data;
    return Promise.reject(error);
  }
);
export default instance;
