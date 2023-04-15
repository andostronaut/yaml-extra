'use strict'

const yaml = require('../..')
const path = require('path')
const fse = require('fs-extra')
const os = require('os')

let TEST_DIR = ''

yaml.describe('yaml-extra', () => {
  beforeEach((done) => {
    TEST_DIR = path.join(os.tmpdir(), 'yaml-extra', 'copy')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach((done) => fse.remove(TEST_DIR, done))

  describe('+ copy()', () => {
    it('should copy yaml file', () => {
      const src = path.join(TEST_DIR, 'TEST_yaml-extra_copy_base')
      const dest = path.join(TEST_DIR, 'TEST_yaml-extra_copy')

      yaml.copy(
        src,
        dest,
        (res) => {
          expect(res).toBe(dest)
        },
        (err) => {
          expect(err).toBeDefined()
        }
      )
    })
  })
})
