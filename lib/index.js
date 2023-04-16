'use strict'

module.exports = {
  ...require('./create'),
  ...require('./read'),
  ...require('./write'),
  ...require('./copy'),
  ...require('./remove')
}
