const request = require("../service")

module.exports = {
  list: ({ offset, limit }) => {
    return request({
      url: "/videos",
      method: "get",
      params: { offset, limit }
    });
  },
  get: id => {
    return request({
      url: `/videos/${id}`,
      method: "get"
    });
  },
  create: ({ title, date, infoHash, ips }) => {
    return request({
      url: "/videos",
      method: "post",
      data: { title, date, info_hash: infoHash, ips }
    });
  },
  delete: id => {
    return request({
      url: `/videos/${id}`,
      method: "delete"
    });
  },
  update: (id, { title, date }) => {
    return request({
      url: `/videos/${id}`,
      method: "put",
      data: { title, date }
    });
  }
};
