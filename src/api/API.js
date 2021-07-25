const axios = require("axios");
const apiUrl = (path) => process.env.REACT_APP_API_BASEURL + path;

const API = {
  get(path, params) {
    return axios.get(apiUrl(path), { params: params });
  },
  post(path, data) {
    return axios.post(apiUrl(path), data);
  },
};

export default API;
