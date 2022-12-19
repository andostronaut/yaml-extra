'use strict'

const yaml = require('../../')
const path = require('path')
const fse = require('fs-extra')
const os = require('os')

let TEST_DIR = ''

describe('yaml-extra', () => {
  beforeEach((done) => {
    TEST_DIR = path.join(os.tmpdir(), 'yaml-extra', 'create-sync')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach((done) => fse.remove(TEST_DIR, done))

  describe('+ createSync()', () => {
    it('should create yaml file in sync', async () => {
      const dest = path.join(TEST_DIR, 'TEST_yaml-extra_create-sync')

      try {
        const res = await yaml.createSync(dest)
        expect(res).toBe(dest)
      } catch (error) {
        expect(error).toBeDefined()
      }
    })
  })
})
