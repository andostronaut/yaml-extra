# YAML: extra

![build](https://github.com/iamando/yaml-extra/workflows/build/badge.svg)
![license](https://img.shields.io/github/license/iamando/yaml-extra?color=success)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![npm](https://img.shields.io/npm/v/yaml-extra)
![release](https://img.shields.io/github/release-date/iamando/yaml-extra)

`yaml-extra` contains methods that aren't included in the `yaml` package. Such read(), write()

## Installation

```bash
npm install yaml-extra
```

## Usage

```js
const ye = require('yaml-extra')
```

## Sync vs Async vs Async/Await

Most methods are async by default. All async methods will return a promise if the callback isn't passed.

Sync methods on the other hand will throw if an error occurs.

Also Async/Await will throw an error if one occurs.

Example:

```js
const ye = require('yaml-extra')

// Async with promises:
ye.write('/file.yaml', { foo: 'bar' })
  .then((doc) => console.log(doc))
  .catch((err) => console.error(err))

// Async with callbacks:
ye.write(
  '/file.yaml',
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
  const doc = ye.writeSync('/file.yaml', { foo: 'bar' })
  console.log(doc)
} catch (err) {
  console.error(err)
}

// Async/Await:
async function writeFile() {
  try {
    const doc = await ye.write('/file.yaml', { foo: 'bar' })
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
