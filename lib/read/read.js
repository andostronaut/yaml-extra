'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')

function read(src, opts, cbSuccess, cbError) {
  cbSuccess = cbSuccess || function () {}
  cbError = cbError || function () {}
  opts = opts || {}

  if (typeof src !== 'string') {
    return cbError(new Error('File name need to be String'))
  }

  if (path.extname(src) !== 'yaml' || path.extname(src) !== '.yml') {
    throw new Error('An error occured, file name must be have a extname of `.yaml` or `.yml`')
  }

  if (typeof opts === 'function' && !cbSuccess) {
    cbSuccess = opts
    opts = {}
  } else if (typeof opts === 'function') {
    opts = { options: opts }
  }

  opts.encoder = 'encoder' in opts ? opts.encoder : 'utf8'
  opts.dump = 'dump' in opts ? opts.dump : false

  return ny
    .read(src)
    .then(() => {
      if (opts.dump) {
        try {
          const doc = jsy.dump(fs.readFileSync(src, opts.encoder))
          return cbSuccess(doc)
        } catch (error) {
          return cbError(error)
        }
      }

      try {
        const doc = jsy.load(fs.readFileSync(src, opts.encoder))
        return cbSuccess(doc)
      } catch (error) {
        return cbError(error)
      }
    })
    .catch((err) => {
      cbError(new Error(err))
    })
}

module.exports = read
