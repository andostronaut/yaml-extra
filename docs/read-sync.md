# readSync(src[, options])

read a yaml file in sync.

- `src` `<String>` Note that `src` is a path for yaml file to read.
- `options` `<Object>` Different options you can specify.
  - `encoder` `<String>` By default encoder is utf-8, you can use your encoder.
  - `dump` `<Boolean>` By default dump is false, you can set it to true.

## Example

```js
const ye = require('yaml-extra')

function example() {
  try {
    const doc = ye.readSync('/file.yaml')
    console.log(doc)
  } catch (err) {
    console.error(err)
  }
}

example()
```
