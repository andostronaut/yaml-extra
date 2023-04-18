# Yaml: extra

![build](https://github.com/iamando/yaml-extra/workflows/build/badge.svg)
![license](https://img.shields.io/github/license/iamando/yaml-extra?color=success)
![npm](https://img.shields.io/npm/v/yaml-extra)
![release](https://img.shields.io/github/release-date/iamando/yaml-extra)

`yaml-extra` contains methods such read(), write() that you can use easily to write or read a yaml file.

## Installation

```bash
npm install yaml-extra
```

## Usage

### CommonJS

```js
const ye = require('yaml-extra')
```

### ESM

There is also an `yaml-extra/esm` import, that supports both default and named exports.

```js
import { write, writeSync } from 'yaml-extra/esm'
```

Default exports are supported:

```js
import ye from 'yaml-extra/esm'
```

## Sync vs Async vs Async/Await

Most methods are async by default. All async methods will return a promise if the callback isn't passed.

Sync methods on the other hand will throw if an error occurs.

Also Async/Await will throw an error if one occurs.

Example:

```js
const ye = require('yaml-extra')
const path = require('path')

// Use path join for file path
const filePath = path.join(__dirname, 'file.yaml')

// Async with promises:
ye.write(filePath, { foo: 'bar' })
  .then((doc) => console.log(doc))
  .catch((err) => console.error(err))

// Async with callbacks:
ye.write(
  filePath,
  { foo: 'bar' },
  (doc) => {
    console.log(doc)
  },
  (err) => {
    console.error(err)
  }
)

// Sync:
try {
  const doc = ye.writeSync(filePath, { foo: 'bar' })
  console.log(doc)
} catch (err) {
  console.error(err)
}

// Async/Await:
async function writeFile() {
  try {
    const doc = await ye.write(filePath, { foo: 'bar' })
    console.log(doc)
  } catch (err) {
    console.error(err)
  }
}

writeFile()
```

## Methods

Async

- [read](docs/read.md)
- [write](docs/write.md)

Sync

- [readSync](docs/read-sync.md)
- [writeSync](docs/write-sync.md)

## Support

yaml-extra is an MIT-licensed open source project. It can grow thanks to the sponsors and support.

## License

yaml-extra is [MIT licensed](LICENSE).
