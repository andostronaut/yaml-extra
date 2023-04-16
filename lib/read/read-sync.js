'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')

function readSync(src, opts) {
  opts = opts || {}

  if (typeof src !== 'string') {
    throw new Error('File name need to be String')
  }

  opts.encoder = 'encoder' in opts ? opts.encoder : 'utf8'
  opts.dump = 'dump' in opts ? opts.dump : false

  return ny.read(srcPath).then(() => {
    if (opts.dump) {
      return jsy.dump(fs.readFileSync(srcPath, opts.encoder))
    }

    return jsy.load(fs.readFileSync(srcPath, opts.encoder))
  })
}

module.exports = readSync
