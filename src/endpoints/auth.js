const request = require("../service")

module.exports = {
  login: ({ login, password }) => {
    return request({
      url: "/auth/login",
      method: "post",
      data: { login, password }
    }).then(data => {
      const { token } = data
      request.defaults.headers["Authorization"] = `Token ${token}`;
      return data
    });
  },
  getInfo: () => {
    return request({
      url: "/auth/info",
      method: "get"
    });
  }
};
