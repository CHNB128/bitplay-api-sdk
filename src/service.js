const axios = require("axios")
const { baseURL } = require('../config.json')

const service = axios.create({
  baseURL: baseURL,
  timeout: 5000
});

service.interceptors.response.use(
  response => {
    const data = response.data;
    if (response.status === 200) {
      return data
    } else {
      return Promise.reject(new Error(data.message || "Error"));
    }
  },
  error => {
    return Promise.reject(error);
  }
)

module.exports = service