const request = require("../service")

const chapters = {
  list: (seriesId, seasonId, { offset, limit }) => {
    return request({
      url: `/series/${seriesId}/seasons/${seasonId}`,
      method: "get",
      params: { offset, limit }
    });
  },
  get: (seriesId, seasonId, chapterId) => {
    return request({
      url: `/series/${seriesId}/seasons/${seasonId}/chapters/${chapterId}`,
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
  delete: (seriesId, seasonId, chapterId) => {
    return request({
      url: `/series/${seriesId}/seasons/${seasonId}/chapters/${chapterId}`,
      method: "delete"
    });
  },
  update: (seriesId, seasonId, chapterId, { translationId, title, date, number }) => {
    return request({
      url: `/series/${seriesId}/seasons/${seasonId}/chapters/${chapterId}`,
      method: "put",
      data: { translation_id: translationId, title, date, number }
    });
  }
}

const seasons = {
  list: (seriesId, { offset, limit }) => {
    return request({
      url: `/series/${seriesId}/seasons`,
      method: "get",
      params: { offset, limit }
    });
  },
  get: (seriesId, seasonId) => {
    return request({
      url: `/series/${seriesId}/seasons/${seasonId}`,
      method: "get"
    });
  },
  create: (seriesId, { title, date, number }) => {
    return request({
      url: `/series/${seriesId}/seasons`,
      method: 'post',
      data: { title, date, number }
    })
  },
  delete: (seriesId, seasonId) => {
    return request({
      url: `/series/${seriesId}/seasons/${seasonId}`,
      method: "delete"
    });
  },
  update: (seriesId, seasonId, { title, date, number }) => {
    return request({
      url: `series/${seriesId}/seasons/${seasonId}`,
      method: 'put',
      data: { title, date, number }
    })
  }
}

module.exports = {
  chapters,
  seasons,
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
