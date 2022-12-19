'use strict'

const u = require('universalify').fromCallback

module.exports = {
  create: u(require('./create')),
  createSync: require('./create-sync')
}
