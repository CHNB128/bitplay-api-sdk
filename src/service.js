const axios = require('axios')
const config = require('./config.json')

const service = axios.create({
  baseURL: `http://${config.api.host}:${config.api.port}/api`
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