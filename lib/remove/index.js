'use strict'

const u = require('universalify').fromCallback

module.exports = {
  remove: u(require('./remove')),
  removeSync: require('./remove-sync')
}
