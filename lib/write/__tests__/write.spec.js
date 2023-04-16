'use strict'

const yaml = require('../..')
const path = require('path')
const fse = require('fs-extra')
const os = require('os')

let TEST_DIR = ''

describe('yaml-extra', () => {
  beforeEach((done) => {
    TEST_DIR = path.join(os.tmpdir(), 'yaml-extra', 'write')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach((done) => fse.remove(TEST_DIR, done))

  describe('+ write()', () => {
    it('should create and write yaml file', () => {
      const src = path.join(TEST_DIR, 'TEST_yaml-extra_create-write')
      fse.createFile(src, (err) => {
        if (err) return expect(err).toBeDefined()
        yaml.write(
          src,
          { foo: 'bar' },
          (res) => {
            expect(res).toBeDefined()
          },
          (err) => {
            expect(err).toBeDefined()
          }
        )
      })
    })
  })
})
