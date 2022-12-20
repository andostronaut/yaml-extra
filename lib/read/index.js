'use strict'

const u = require('universalify').fromCallback

module.exports = {
  read: u(require('./read')),
  readSync: require('./read-sync')
}
