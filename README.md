# yaml-extra

`yaml-extra` contains methods that aren't included in the `yaml` package. Such load, dump, create, read, write, copy, and remove.

## Installation

    npm install yaml-extra

## Usage

```js
const yaml = require("yaml-extra");
```

## Sync vs Async vs Async/Await

Most methods are async by default. All async methods will return a promise if the callback isn't passed.

Sync methods on the other hand will throw if an error occurs.

Also Async/Await will throw an error if one occurs.

Example:

```js
const yaml = require("yaml-extra");

// Async with promises:
yaml
  .write("/tmp/myfile", { foo: bar })
  .then(() => console.log("success!"))
  .catch((err) => console.error(err));

// Async with callbacks:
yaml.write("/tmp/myfile", { foo: bar }, (err) => {
  if (err) return console.error(err);
  console.log("success!");
});

// Sync:
try {
  yaml.writeSync("/tmp/myfile", { foo: bar });
  console.log("success!");
} catch (err) {
  console.error(err);
}

// Async/Await:
async function writeFile() {
  try {
    await yaml.write("/tmp/myfile", { foo: bar });
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}

writeFile();
```

## Methods

### Async

- [load](docs/load.md)
- [dump](docs/dump.md)
- [create](docs/create.md)
- [read](docs/read.md)
- [copy](docs/copy.md)
- [write](docs/write.md)
- [remove](docs/remove.md)

### Sync

- [loadSync](docs/load-sync.md)
- [dumpSync](docs/dump-sync.md)
- [createSync](docs/create-sync.md)
- [readSync](docs/read-sync.md)
- [copySync](docs/copy-sync.md)
- [writeSync](docs/write-sync.md)
- [removeSync](docs/remove-sync.md)

## Support

yaml-extra is an MIT-licensed open source project. It can grow thanks to the sponsors and support.

## License

yaml-extra is [MIT licensed](LICENSE).

Copyright (c) 2022 [iamando](https://github.com/iamando)
