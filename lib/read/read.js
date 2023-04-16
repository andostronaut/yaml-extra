'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')

function read(src, opts, cbSuccess, cbError) {
  cbSuccess = cbSuccess || function () {}
  cbError = cbError || function () {}
  opts = opts || {}

  if (typeof src !== 'string') {
    return cbError(new Error('An error occured, file name must be a string'))
  }

  if (path.extname(src) !== 'yaml' || path.extname(src) !== '.yml') {
    return cbError(
      new Error('An error occured, file name must be have a extname of `.yaml` or `.yml`')
    )
  }

  if (!fs.existsSync(src)) {
    return cbError(new Error('An error occured, file not found or exist in directory'))
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
        } catch (err) {
          return cbError(`An error occured, ${err.response}`)
        }
      }

      try {
        const doc = jsy.load(fs.readFileSync(src, opts.encoder))
        return cbSuccess(doc)
      } catch (err) {
        return cbError(`An error occured, ${err.response}`)
      }
    })
    .catch((err) => {
      cbError(new Error(`An error occured, ${err.response}`))
    })
}

module.exports = read
