'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')
const wyf = require('write-yaml-file')

function writeSync(src, content, opts) {
  opts = opts || {}

  if (typeof src !== 'string') {
    throw new Error('File path need to be String')
  }

  if (typeof content !== 'object') {
    throw new Error('Content need to be Object')
  }

  if (!fs.existsSync(src)) {
    throw new Error('File not found')
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

      return wyf(src, ctn).then(() => {
        const doc = jsy.load(fs.readFileSync(src, opts.encoder))
        return doc
      })
    })
    .catch((err) => {
      throw new Error(err)
    })
}

module.exports = writeSync
