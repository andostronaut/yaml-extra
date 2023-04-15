'use strict'

const u = require('universalify').fromCallback

module.exports = {
  create: u(require('./copy')),
  createSync: require('./copy-sync')
}
