'use strict'

const yaml = require('../..')
const path = require('path')
const fse = require('fs-extra')
const os = require('os')

let TEST_DIR = ''

describe('yaml-extra', () => {
  beforeEach((done) => {
    TEST_DIR = path.join(os.tmpdir(), 'yaml-extra', 'read')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach((done) => fse.remove(TEST_DIR, done))

  describe('+ read()', () => {
    it('should create and read yaml file', () => {
      const src = path.join(TEST_DIR, 'TEST_yaml-extra_create-read')
      fse.createFile(src, (err) => {
        if (err) return expect(err).toBeDefined()
        yaml.read(
          src,
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
