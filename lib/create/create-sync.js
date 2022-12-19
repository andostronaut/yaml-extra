'use strict'

const path = require('path')
const execa = require('execa')

function createSync(dest) {
  if (typeof dest !== 'string') {
    throw new Error('dest path need to be string')
  }

  if (
    (path.extname(dest) && path.extname(dest) !== '.yaml') ||
    (path.extname(dest) && path.extname(dest) !== '.yml')
  ) {
    throw new Error('File extension need to be yaml or yml')
  }

  return execa('touch', [dest])
}

module.exports = createSync
