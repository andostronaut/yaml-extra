import _read from './read/index.js'
import _write from './write/index.js'

export const read = _read.read
export const readSync = _read.readSync
export const write = _write.write
export const writeSync = _write.writeSync

export default {
  ..._read,
  ..._write
}
