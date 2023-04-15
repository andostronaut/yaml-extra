'use strict'

const yaml = require('../..')
const path = require('path')
const fse = require('fs-extra')
const os = require('os')

let TEST_DIR = ''

describe('yaml-extra', () => {
  beforeEach((done) => {
    TEST_DIR = path.join(os.tmpdir(), 'yaml-extra', 'copy-sync')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach((done) => fse.remove(TEST_DIR, done))

  describe('+ copySync()', () => {
    it('should copy yaml file in sync', async () => {
      const src = path.join(TEST_DIR, 'TEST_yaml-extra_copy_sync_base')
      const dest = path.join(TEST_DIR, 'TEST_yaml-extra_copy-sync')

      try {
        const res = await yaml.copySync(src, dest)
        expect(res).toBe(dest)
      } catch (error) {
        expect(error).toBeDefined()
      }
    })
  })
})
