import axios from "axios";
import { BASE_URL, API_HOST, API_KEY, REQUEST_TIMEOUT } from "./config";

/** general headers **/
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "X-RapidAPI-Host": API_HOST,
  "X-RapidAPI-Key": API_KEY,
};

/** axios instance **/
const instance = axios.create({
  baseURL: BASE_URL,
  headers,
  withCredentials: false,
});

/** timeout configuration for axios instance **/
instance.defaults.timeout = REQUEST_TIMEOUT;

/** axios interceptor to trigger a logout on unauthorized error response code **/
instance.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (error) => {
    if (error.message === "canceled") {
      return Promise.reject({
        error: true,
        data: null,
        message: null,
      });
    }

    if (error.response?.status === 429) {
      return Promise.reject(null);
    }

    return Promise.reject(error ? error.response.data : null);
  }
);

/** make an axios get request **/
export const makeGetRequest = (path, params = {}) =>
  instance.get(path, { params });
