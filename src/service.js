const axios = require("axios")

const service = axios.create({
  baseURL: 'http://167.71.35.51:3000/api',
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