import axios from "axios";
import nProgress from "nprogress";

nProgress.configure({
  showSpinner: true,
  trickleSpeed: 100,
});

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

//add a request interceptor
instance.interceptors.request.use(
  function (config) {
    nProgress.start();
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
    nProgress.done();
    return Promise.reject(error);
  }
);

// add a response interceptor
instance.interceptors.response.use(
  function (response) {
    nProgress.done();
    if (response.data && response.data.data) return response.data;
    return response;
  },
  function (error) {
    nProgress.done();
    //return error from backend
    if (error.response && error.response.data) return error.response.data;
    return Promise.reject(error);
  }
);
export default instance;
