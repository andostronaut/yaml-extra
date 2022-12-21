'use strict'

const path = require('path')
const execa = require('execa')

function create(dest, cbSuccess, cbError) {
  cbSuccess = cbSuccess || function () {}
  cbError = cbError || function () {}

  if (typeof dest !== 'string') {
    return cbError(new Error('File name need to be String'))
  }

  if (
    (path.extname(dest) && path.extname(dest) !== '.yaml') ||
    (path.extname(dest) && path.extname(dest) !== '.yml')
  ) {
    return cbError(new Error('File extension need to be yaml or yml'))
  }

  return execa('touch', [dest], (err) => {
    if (err) return cbError(new Error(err))

    cbSuccess(dest)
  })
}

module.exports = create
