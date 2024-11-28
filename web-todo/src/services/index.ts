import { Api } from "./TodoApi";
import Cookie from "js-cookie";

export const todoApi = new Api();
todoApi.instance.defaults.baseURL = "http://localhost:3000";
todoApi.instance.interceptors.request.use(
  (config) => {
    const token = Cookie.get("assess_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
