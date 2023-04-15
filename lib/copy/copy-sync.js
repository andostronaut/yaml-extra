'use strict'

const fs = require('fs')
const path = require('path')

function copySync(src, dest, opts) {
  if (typeof src !== 'string') {
    return cbError(new Error('File path src need to be String'))
  }

  if (typeof dest !== 'string') {
    return cbError(new Error('File path dest need to be String'))
  }

  if (typeof opts !== 'object') {
    return cbError(new Error('Options need to be Object'))
  }

  if (
    (path.extname(src) && path.extname(src) !== '.yaml') ||
    (path.extname(src) && path.extname(src) !== '.yml')
  ) {
    return cbError(new Error('File name src extension need to be yaml or yml'))
  }

  if (
    (path.extname(dest) && path.extname(dest) !== '.yaml') ||
    (path.extname(dest) && path.extname(dest) !== '.yml')
  ) {
    return cbError(new Error('File name src extension need to be yaml or yml'))
  }

  return fs.copyFileSync(src, dest)
}

module.exports = copySync
