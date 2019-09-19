const request = require("../service")

module.exports = {
  getSetting: (section, name) => {
    return request({
      url: "/settings",
      method: "post",
      data: {
        section_name: section,
        settings_name: name
      }
    });
  },
  setSetting: (section, name, value) => {
    return request({
      url: "/settings",
      method: "put",
      data: {
        section_name: section,
        settings_name: name,
        settings_value: value
      }
    });
  }
};
