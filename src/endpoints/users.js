const request = require("../service")

module.exports = {
  getUser: (id) => {
    return request({
      url: `/users/${id}`,
      method: "get",
    });
  }
};
