const request = require("../service")

module.exports = {
  list: ({ offset, limit }) => {
    return request({
      url: "/translations",
      method: "get",
      params: { offset, limit }
    });
  },
  get: id => {
    return request({
      url: `/translations/${id}`,
      method: "get"
    });
  },
  create: ({ title }) => {
    return request({
      url: "/translations",
      method: "post",
      data: { title }
    });
  },
  delete: id => {
    return request({
      url: `/translations/${id}`,
      method: "delete"
    });
  },
  update: (id, { title }) => {
    return request({
      url: `/translations/${id}`,
      method: "put",
      data: { title }
    });
  }
};
