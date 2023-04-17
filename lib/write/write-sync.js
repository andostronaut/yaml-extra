'use strict'

const fs = require('fs')
const ny = require('node-yaml')
const jsy = require('js-yaml')
const wyf = require('write-yaml-file')
const path = require('path')

function writeSync(src, content, opts) {
  opts = opts || {}

  if (typeof src !== 'string') {
    throw new Error('An error occured, file path need to be string')
  }

  if (path.extname(src) !== '.yaml' ?? path.extname(src) !== '.yml') {
    throw new Error('An error occured, file name must be have a extname of `.yaml` or `.yml`')
  }

  if (typeof content !== 'object') {
    throw new Error('An error occured, content must be an valid object')
  }

  if (!fs.existsSync(src)) {
    throw new Error('An error occured, file not found or exist in directory')
  }

  opts.encoder = 'encoder' in opts ? opts.encoder : 'utf8'
  opts.override = 'override' in opts ? opts.override : false

  const nyRes = ny.readSync(src)

  if (!nyRes) {
    throw new Error('An error occured, while reading file in node yaml')
  }

  const yml = jsy.load(fs.readFileSync(src, opts.encoder))

  if (!yml) {
    throw new Error('An error occured, while on load file')
  }

  const ctn = {
    ...(!opts.override && yml),
    ...content
  }

  wyf.sync(src, ctn)

  const doc = jsy.load(fs.readFileSync(src, opts.encoder))

  if (!doc) {
    throw new Error('An error occured, while on load doc yaml file')
  }

  return doc
}

module.exports = writeSync
