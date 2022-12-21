'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')
const wyf = require('write-yaml-file')

function write(src, content, opts, cbSuccess, cbError) {
  cbSuccess = cbSuccess || function () {}
  cbError = cbError || function () {}
  opts = opts || {}

  if (typeof src !== 'string') {
    return cbError(new Error('File path need to be String'))
  }

  if (typeof content !== 'object') {
    return cbError(new Error('Content need to be Object'))
  }

  if (!fs.existsSync(src)) {
    return cbError(new Error('File not found'))
  }

  if (typeof opts === 'function' && !cbSuccess) {
    cbSuccess = opts
    opts = {}
  } else if (typeof opts === 'function') {
    opts = { options: opts }
  }

  opts.encoder = 'encoder' in opts ? opts.encoder : 'utf8'
  opts.override = 'override' in opts ? opts.override : false

  return ny
    .read(src)
    .then(() => {
      const yml = jsy.load(fs.readFileSync(src, opts.encoder))

      const ctn = {
        ...(!opts.override && yml),
        ...content
      }

      return wyf(src, ctn)
        .then(() => {
          const doc = jsy.load(fs.readFileSync(src, opts.encoder))
          cbSuccess(doc)
        })
        .catch((err) => {
          cbError(new Error(err))
        })
    })
    .catch((err) => {
      cbError(new Error(err))
    })
}

module.exports = write
