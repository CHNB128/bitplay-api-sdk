const service = require('./service')

module.exports = {
  info: require('./endpoints/info'),
  auth: require('./endpoints/auth'),
  settings: require('./endpoints/settings'),
  video: require('./endpoints/video'),
  users: require('./endpoints/users'),
}