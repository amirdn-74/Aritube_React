import axios from "axios";
import swal from "sweetalert2";
import { updateProgressBar } from "../store/reducers/ui";
import store from "../store/store";

axios.defaults.baseURL = "http://localhost:4000/api";

const setToken = (token) => {
  axios.defaults.headers.common["x-auth-token"] = token;
};

const defaultOptions = {
  onUploadProgress: ({ loaded, total }) => {
    const progress = Math.ceil((parseInt(loaded) / parseInt(total)) * 100);
    store.dispatch(updateProgressBar({ progress }));
  },
};

axios.interceptors.response.use(
  (data) => {
    store.dispatch(updateProgressBar({ progress: 0 }));
    return data;
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log("Unexpected Error: ", error);
      swal.fire("Oops!", "Something Went Wrong", "error");
    }

    store.dispatch(updateProgressBar({ progress: 0 }));

    return Promise.reject(error);
  }
);

const get = (url, options) => {
  return axios.get(url, {
    ...defaultOptions,
    ...options,
  });
};

const post = (url, data, options) => {
  return axios.post(url, data, {
    ...defaultOptions,
    ...options,
  });
};

const put = (url, data, options) => {
  return axios.put(url, data, {
    ...defaultOptions,
    ...options,
  });
};

const del = (url, options) => {
  return axios.delete(url, {
    ...defaultOptions,
    ...options,
  });
};

export default {
  get,
  post,
  put,
  delete: del,
  setToken,
};
