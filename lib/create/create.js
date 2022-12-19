'use strict'

const path = require('path')
const execa = require('execa')

function create(dest, cb) {
  cb = cb || function () {}

  if (typeof dest !== 'string') {
    return cb('File name need to be String')
  }

  if (
    (path.extname(dest) && path.extname(dest) !== '.yaml') ||
    (path.extname(dest) && path.extname(dest) !== '.yml')
  ) {
    return cb('File extension need to be yaml or yml')
  }

  return execa('touch', [dest], (err) => {
    if (err) return cb(err)

    cb(dest)
  })
}

module.exports = create
