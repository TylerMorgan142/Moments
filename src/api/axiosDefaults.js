import axios from "axios";

axios.defaults.baseURL = "https://drf-api-tyler-efb224d70720.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();