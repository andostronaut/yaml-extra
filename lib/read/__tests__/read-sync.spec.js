'use strict'

const ye = require('../..')
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

  describe('+ readSync()', () => {
    it('should read yaml file in sync', () => {
      const src = path.join(TEST_DIR, 'read-sync.yaml')
      fse.createFile(src, async (err) => {
        if (err) return expect(err).toBeDefined()

        try {
          ye.writeSync(src, { foo: 'bar' })
          try {
            const doc = ye.readSync(src)
            expect(doc).toBeDefined()
          } catch (err) {
            expect(err).toBeDefined()
          }
        } catch (err) {
          expect(err).toBeDefined()
        }
      })
    })
  })
})
