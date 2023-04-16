'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')
const path = require('path')

function readSync(src, opts) {
  opts = opts || {}

  if (typeof src !== 'string') {
    throw new Error('File name need to be String')
  }

  if (path.extname(src) !== '.yaml' ?? path.extname(src) !== '.yml') {
    throw new Error('An error occured, file name must be have a extname of `.yaml` or `.yml`')
  }

  if (!fs.existsSync(src)) {
    throw new Error('An error occured, file not found or exist in directory')
  }

  opts.encoder = 'encoder' in opts ? opts.encoder : 'utf8'
  opts.dump = 'dump' in opts ? opts.dump : false

  return ny.read(src).then(() => {
    if (opts.dump) {
      return jsy.dump(fs.readFileSync(src, opts.encoder))
    }

    return jsy.load(fs.readFileSync(src, opts.encoder))
  })
}

module.exports = readSync
