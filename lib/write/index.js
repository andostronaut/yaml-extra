'use strict'

const u = require('universalify').fromCallback

module.exports = {
  write: u(require('./write')),
  writeSync: require('./write-sync')
}
