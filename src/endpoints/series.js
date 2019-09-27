const request = require("../service")

const batches = {
  list: (seriesId, { offset, limit }) => {
    return request({
      url: `/series/${seriesId}/batches`,
      method: "get",
      params: { offset, limit }
    });
  },
  get: (seriesId, { batchesId }) => {
    return request({
      url: `/series/${seriesId}/batches/${batchesId}`,
      method: "get"
    });
  },
  create: (seriesId, { translationId, title, seasonNumber, batchNumber, infoHash, servers }) => {
    return request({
      url: `/series/${seriesId}/batches`,
      method: "post",
      data: {
        translation_id: translationId,
        title,
        season_number: seasonNumber,
        batch_number: batchNumber,
        info_hash: infoHash,
        ips: servers
      }
    });
  },
  delete: (seriesId, { batchesId }) => {
    return request({
      url: `/series/${seriesId}/batches/${batchesId}`,
      method: "delete"
    });
  },
  update: (seriesId, { translationId, title, seasonNumber, batchNumber }) => {
    return request({
      url: `/series/${seriesId}/batches/${batchesId}`,
      method: "put",
      data: {
        translation_id: translationId,
        title,
        season_number: seasonNumber,
        batch_number: batchNumber,
      }
    });
  }
}

module.exports = {
  batches,
  list: ({ offset, limit }) => {
    return request({
      url: "/series",
      method: "get",
      params: { offset, limit }
    });
  },
  get: seriesId => {
    return request({
      url: `/series/${seriesId}`,
      method: "get"
    });
  },
  create: ({ title, date, infoHash, ips }) => {
    return request({
      url: "/series",
      method: "post",
      data: { title, date, info_hash: infoHash, ips }
    });
  },
  delete: seriesId => {
    return request({
      url: `/series/${seriesId}`,
      method: "delete"
    });
  },
  update: (seriesId, { title, date }) => {
    return request({
      url: `/series/${seriesId}`,
      method: "put",
      data: { title, date }
    });
  }
};
