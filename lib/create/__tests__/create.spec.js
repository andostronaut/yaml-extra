'use strict'

const yaml = require('../../')
const path = require('path')
const fse = require('fs-extra')
const os = require('os')

let TEST_DIR = ''

describe('yaml-extra', () => {
  beforeEach((done) => {
    TEST_DIR = path.join(os.tmpdir(), 'yaml-extra', 'create')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach((done) => fse.remove(TEST_DIR, done))

  describe('+ create()', () => {
    it('should create yaml file', () => {
      const dest = path.join(TEST_DIR, 'TEST_yaml-extra_create')

      yaml.create(
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
