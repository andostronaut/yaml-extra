'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')
const path = require('path')

function readSync(src, opts) {
  opts = opts || {}

  if (typeof src !== 'string') {
    throw new Error('An error occured, file path need to be string')
  }

  if (path.extname(src) !== '.yaml' ?? path.extname(src) !== '.yml') {
    throw new Error('An error occured, file name must be have a extname of `.yaml` or `.yml`')
  }

  if (!fs.existsSync(src)) {
    throw new Error('An error occured, file not found or exist in directory')
  }

  opts.encoder = 'encoder' in opts ? opts.encoder : 'utf8'
  opts.dump = 'dump' in opts ? opts.dump : false

  const nyRes = ny.readSync(src)

  if (!nyRes) {
    throw new Error('An error occured, while reading file in node yaml')
  }

  if (opts.dump) {
    const doc = jsy.dump(fs.readFileSync(src, opts.encoder))

    if (!doc) {
      throw new Error('An error occured, while on dump doc yaml file')
    }

    return doc
  }

  const doc = jsy.load(fs.readFileSync(src, opts.encoder))

  if (!doc) {
    throw new Error('An error occured, while on load doc yaml file')
  }

  return doc
}

module.exports = readSync
