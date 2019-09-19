const request = require("../service")

module.exports = {
  getSeeds: () => {
    return request({
      url: "/info/seeds",
      method: "get"
    });
  },
  getTrackers: () => {
    return request({
      url: "/info/trackers",
      method: "get"
    });
  },
  getUploadServers: () => {
    return request({
      url: "/info/upload-servers",
      method: "get"
    })
  }
};
