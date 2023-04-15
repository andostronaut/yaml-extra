'use strict'

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
}

module.exports = copySync
