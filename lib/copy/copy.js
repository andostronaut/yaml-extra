'use strict'

const fs = require('fs')
const path = require('path')

function copy(src, dest, opts, cbSuccess, cbError) {
  cbSuccess = cbSuccess || function () {}
  cbError = cbError || function () {}
  opts = opts || {}

  if (typeof src !== 'string') {
    return cbError(new Error('File path src need to be String'))
  }

  if (typeof dest !== 'string') {
    return cbError(new Error('File path dest need to be String'))
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

  if (typeof opts === 'function' && !cbSuccess) {
    cbSuccess = opts
    opts = {}
  } else if (typeof opts === 'function') {
    opts = { options: opts }
  }

  fs.copyFile(src, dest, (err) => {
    if (err) return cbError(new Error(err))

    cbSuccess('File copied')
  })
}

module.exports = copy
