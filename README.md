# YAML: extra

![build](https://github.com/iamando/yaml-extra/workflows/build/badge.svg)
![license](https://img.shields.io/github/license/iamando/yaml-extra?color=success)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`yaml-extra` contains methods that aren't included in the `yaml` package. Such create, read, write, copy, and remove.

## Installation

```bash
npm install yaml-extra
```

## Usage

```js
const yaml = require('yaml-extra')
```

## Sync vs Async vs Async/Await

Most methods are async by default. All async methods will return a promise if the callback isn't passed.

Sync methods on the other hand will throw if an error occurs.

Also Async/Await will throw an error if one occurs.

Example:

```js
const yaml = require('yaml-extra')

// Async with promises:
yaml
  .write('/tmp/myfile', { foo: bar })
  .then((doc) => console.log(doc))
  .catch((err) => console.error(err))

// Async with callbacks:
yaml.write(
  '/tmp/myfile',
  { foo: bar },
  (doc) => {
    console.log(doc)
  },
  (err) => {
    console.error(err)
  }
)

// Sync:
try {
  const doc = yaml.writeSync('/tmp/myfile', { foo: bar })
  console.log(doc)
} catch (err) {
  console.error(err)
}

// Async/Await:
async function writeFile() {
  try {
    const doc = await yaml.write('/tmp/myfile', { foo: bar })
    console.log(doc)
  } catch (err) {
    console.error(err)
  }
}

writeFile()
```

## Methods

### Async

- [create](docs/create.md)
- [read](docs/read.md)
- [copy](docs/copy.md)
- [write](docs/write.md)
- [remove](docs/remove.md)

### Sync

- [createSync](docs/create-sync.md)
- [readSync](docs/read-sync.md)
- [copySync](docs/copy-sync.md)
- [writeSync](docs/write-sync.md)
- [removeSync](docs/remove-sync.md)

## Support

yaml-extra is an MIT-licensed open source project. It can grow thanks to the sponsors and support.

## License

yaml-extra is [MIT licensed](LICENSE).

Copyright (c) 2023 [iamando](https://github.com/iamando)
