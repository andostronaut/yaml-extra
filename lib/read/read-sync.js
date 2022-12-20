'use strict'

const fs = require('fs')
const jsy = require('js-yaml')

function readSync(src, opts) {
  opts = opts || {}

  if (typeof dest !== 'string') {
    return cb('File name need to be String')
  }

  opts.encoder = 'encoder' in opts ? opts.encoder : 'utf8'
  opts.dump = 'dump' in opts ? opts.dump : false

  if (opts.dump) {
    return jsy.dump(fs.readFileSync(src, opts.encoder))
  }

  return jsy.load(fs.readFileSync(src, opts.encoder))
}

module.exports = readSync
